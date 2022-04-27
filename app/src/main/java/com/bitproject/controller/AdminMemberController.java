package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.FAIL;
import static com.bitproject.controller.ResultMap.SUCCESS;
import java.util.List;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Member;
import com.bitproject.service.AdminMemberService;

@RestController 
public class AdminMemberController {

  @Autowired
  AdminMemberService adminMemberService;

  @RequestMapping("/admin/member/list")
  public Object list() {
    return adminMemberService.list();
  }

  @RequestMapping("/admin/member/pagelist")
  public Object pagelist(int pageSize, int pageNo) {
    return adminMemberService.pagelist(pageSize, pageNo);
  }

  @RequestMapping("/admin/member/size")
  public int size() {
    return adminMemberService.size();
  }

  @RequestMapping("/admin/member/typesize")
  public int typeSize(boolean memberStatus) {
    return adminMemberService.typeSize(memberStatus);
  }

  @RequestMapping("/admin/member/update")
  public Object update(int no) {
    int count = adminMemberService.update(no);

    if(count ==1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("유효하지 않거나 게시글 작성자가 아닙니다.");
    }
  }

  @RequestMapping("/admin/member/get")
  public List<Member> get(String  filt, String value) {
    List<Member> member = adminMemberService.get(filt, value);
    //    if (member == null) {
    //      return ;
    //    }
    return member;
  }

  @RequestMapping("/admin/member/signout")
  public Object signout(HttpSession session) {
    adminMemberService.logout(session);
    session.invalidate();
    return new ResultMap().setStatus(SUCCESS);
  }

  @RequestMapping("/admin/member/delete")
  public Object delete(int no) {

    int count = adminMemberService.delete(no);

    System.out.println(count);

    if(count ==1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("이미 탈퇴한 회원입니다.");
    }
  }

}

