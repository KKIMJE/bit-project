package com.bitproject.service;

import javax.servlet.http.HttpSession;
import com.bitproject.domain.Member;

public interface MemberService {


  int add(Member member);

  Member getMemberByEmailAndPassword(String email, String password);

  Member getMemberByEmail(String email);

  Member getMemberByMno(int mno);

  int update(Member member);
  
  int delete(int mno);

  int emailCheck(String email);

  public void logout(HttpSession session);

}