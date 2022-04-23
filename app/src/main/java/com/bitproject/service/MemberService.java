package com.bitproject.service;

import com.bitproject.domain.Member;

public interface MemberService {


  int add(Member member);

  Member getMemberByEmailAndPassword(String email, String password);

  Member getMemberByEmail(String email);

  Member getMemberByMno(int mno);

  int update(Member member);

  Member emailCheck(String email);

}
