package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.MemberDao;
import com.bitproject.domain.Member;

@RestController 
public class MemberController {

  @Autowired
  MemberDao memberDao;

  @RequestMapping("/member/list")
  public Object list() {
    return memberDao.findAll();
  }

  @RequestMapping("/member/add")
  public Object add(Member member) {
    return memberDao.insert(member);
  }
  //
  //
  @RequestMapping("/member/get")
  public Object get(int no) {
    Member member = memberDao.findByNo(no);
    if (member == null) {
      return "";
    }
    return member;
  }


  @RequestMapping("/member/update")
  public Object update(Member member) {
    return memberDao.update(member);
  }

  @RequestMapping("/member/delete")
  public Object delete(int no) {
    return memberDao.delete(no);
  }
}
