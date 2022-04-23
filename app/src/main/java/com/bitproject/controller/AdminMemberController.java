package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.service.AdminMemberService;

@RestController 
public class AdminMemberController {

  @Autowired
  AdminMemberService adminMemberService;

  @RequestMapping("/admin/member/list")
  public Object list(int pageSize, int pageNo) {
    return adminMemberService.list(pageSize, pageNo);
  }

  @RequestMapping("/admin/member/size")
  public int size() {
    return adminMemberService.size();
  }

  @RequestMapping("/admin/member/typesize")
  public int typeSize(boolean memberStatus) {
    return adminMemberService.typeSize(memberStatus);
  }

}

