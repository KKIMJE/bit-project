package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Party;
import com.bitproject.service.PartyService;

@RestController
@RequestMapping("/party")
public class PartyController {


  @Autowired
  PartyService partyService;

  @GetMapping("/list")
  public Object list() {
    return partyService.list();
  }

  @Transactional
  @PostMapping("/add")
  public Object add(@RequestBody Party party) {
    return partyService.add(party);
  }

  /*@PostMapping("/addMaxMember")
  public Object addMaxMember(int maxMember, HttpServletRequest request, HttpServletResponse response) {
    HttpSession session = request.getSession(); // getSession()메서드는 서버에 생성된 세션이 있다면 세션을 반환하고, 없다면 세 세션을 생성하여 반환한다.
    session.setAttribute("maxMember", maxMember);
    System.out.println(maxMember);
    return true;
  }*/



  /*@PostMapping("/addAddress")
  public Object add(String address, HttpServletRequest request, HttpServletResponse response, ) {
    // 로그인 여부 검사
    HttpSession session = request.getSession(); // getSession()메서드는 서버에 생성된 세션이 있다면 세션을 반환하고, 없다면 세 세션을 생성하여 반환한다.
    Member loginUser = (Member) session.getAttribute("loginUser");
    // System.out.println(loginUser);
    if (loginUser == 1명) {
      // 로그인을 하지 않았으면 오류 메시지를 JSON 형식으로 직접 응답한다.
      response.setContentType("application/json;charset=UTF-8");
      response.getWriter().write(new ObjectMapper().writeValueAsString(new ResultMap()
          .setStatus(ResultMap.FAIL)
          .setData("로그인 하지 않았습니다!")));

      return false; // 페이지 컨트롤러를 실행하지 말고 즉시 응답하라!
    }

    return true; // 로그인 된 상태라면, 계속 진행하라! (요청한 페이지 컨트롤러의 메서드를 호출하라!)
  }
  }
   */


  @GetMapping("/get")
  public Object get(int no) {
    Party party = partyService.get(no);
    if (party == null) {
      return "";
    }
    return party;
  }

  @PostMapping("/update")
  public Object update(Party party) {
    return partyService.update(party);
  }

  @DeleteMapping("/delete")
  public Object delete(int no) {
    return partyService.delete(no);
  }
}
