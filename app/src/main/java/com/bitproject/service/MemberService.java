package com.bitproject.service;

import com.bitproject.domain.Member;

public interface MemberService {


  int add(Member member);

  Member get(String email, String pwd);

  Member get(String email);

}
