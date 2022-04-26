package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.FAIL;
import static com.bitproject.controller.ResultMap.SUCCESS;
import java.util.Map;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;
import com.bitproject.domain.Member;
import com.bitproject.service.MemberService;

@RestController 
@RequestMapping("/member/*")
public class MemberController {

  private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
  // MemberController의 로그를 출력하기 위해 getLogger 메소드를 사용해서 LoggerFactory에 담고 logger변수에 저장


  @Autowired
  MemberService memberService;

  @RequestMapping("/member/signup")
  public Object signUp(Member member) {
    if (memberService.add(member) == 1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL);
    }
  }


  @RequestMapping("member/logout") // logout에 매핑
  public ModelAndView logout(HttpSession session, ModelAndView mav) {
    memberService.logout(session); // 세션 초기화 작업
    mav.setViewName("../main/main.html"); // 이동할 페이지의 이름
    mav.addObject("message", "logout"); //변수 저장
    return mav; //페이지로 이동
  }

  @RequestMapping("/member/signin")
  public Object signin(String email, String password, boolean saveEmail, HttpServletResponse response, HttpSession session) {
    Member loginUser = memberService.getMemberByEmailAndPassword(email, password);
    if (loginUser == null) {
      return new ResultMap().setStatus(FAIL);
    }

    // 로그인이 성공하면, 
    // 다른 요청을 처리할 때 로그인 회원의 정보를 사용할 있도록 세션에 보관한다.
    session.setAttribute("loginUser", loginUser);

    Cookie cookie = null;
    if (saveEmail) {
      // 클라이언트로 보낼 데이터인 쿠키에 이메일을 저장한다.
      cookie = new Cookie("userEmail", email);
    } else {
      cookie = new Cookie("userEmail", "");
      cookie.setMaxAge(0); // 클라이언트에게 해당 이름의 쿠키를 삭제하도록 요구한다.
    }
    response.addCookie(cookie); // 응답할 때 쿠키 정보를 응답헤더에 포함시킨다.

    ResultMap map = new ResultMap();
    map.setStatus(SUCCESS);
    map.setData(loginUser);
    //return new ResultMap().setStatus(SUCCESS);
    return map;
  }

  @RequestMapping("/member/getLoginUser")
  public Object getLoginUser(HttpSession session) {
    Object member = session.getAttribute("loginUser");
    if (member != null) {
      return new ResultMap()
          .setStatus(SUCCESS)
          .setData(member);
    } else {
      return new ResultMap()
          .setStatus(FAIL)
          .setData("로그인 하지 않았습니다.");
    }
  }

  @RequestMapping("/member/signout")
  public Object signout(HttpSession session) {
    memberService.logout(session);
    session.invalidate();
    return new ResultMap().setStatus(SUCCESS);
  }


  @RequestMapping("/member/update")
  public Object update(Member member,HttpSession session) {
    Member loginmember =(Member)session.getAttribute("loginUser");
    member.setMno(loginmember.getMno());
    int count = memberService.update(member);

    if(count ==1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("유효하지 않거나 게시글 작성자가 아닙니다.");
    }
  }

  @ResponseBody
  //@PostMapping("/emailCheck")
  @RequestMapping("/member/emailCheck")
  public Object emailCheck(String email) {
    return memberService.emailCheck(email);
  }

  @RequestMapping("/member/get")
  public Object get(HttpSession session) {
    Member loginmember =(Member)session.getAttribute("loginUser");
    int mno = loginmember.getMno();
    Member member = memberService.getMemberByMno(mno);
    ResultMap map = new ResultMap();
    System.out.println("@@@@"+member);
    if(member == null) {
      map.setStatus(FAIL);
      map.setData(null);
    } else {
      map.setStatus(SUCCESS);
      map.setData(member);
    }
    return map;
  }


  @SuppressWarnings("unchecked")
  @RequestMapping("/member/facebookLogin")
  public Object facebookLogin(String accessToken, HttpSession session) {

    // 1) accessToken을 가지고 페이스북으로 가서 로그인 사용자 정보를 가져온다.
    RestTemplate restTemplate = new RestTemplate();
    Map<String,String> result = restTemplate.getForObject(
        "https://graph.facebook.com/v13.0/me?access_token={value1}&fields={value2}", // 요청할 URL 
        Map.class, // 서버에서 받은 결과의 타입 
        accessToken, // URL의 첫 번째 자리에 들어갈 값
        "id,name,email" // 페이스북 측에 요청하는 로그인 사용자 정보
        );



    // 2) 사용자 이름과 이메일을 알아낸다.
    String name = result.get("name");
    String email = result.get("email");

    // 3) 현재 등록된 사용자 중에서 해당 이메일의 사용자가 있는지 찾아본다.
    Member member = memberService.getMemberByEmail(email);

    if (member != null) {
      // 4-1) 등록된 사용자가 있다면 그 사용자로 자동 로그인 처리한다.
      session.setAttribute("loginUser", member);
      return new ResultMap().setStatus(SUCCESS).setData("기존 회원 로그인");

    } else {
      // 4-2) 등록된 사용자가 아니라면 회원 등록 후 자동 로그인 처리한다.
      memberService.add(new Member()
          .setEmail(email)
          .setName(name)
          .setPassword("1111")
          .setTel("1111111233")
          .setSocialAccept(true)
          .setNickName(email));

      session.setAttribute("loginUser", memberService.getMemberByEmail(email));
      return new ResultMap().setStatus(SUCCESS).setData("새 회원 로그인");
    }
  }
}

