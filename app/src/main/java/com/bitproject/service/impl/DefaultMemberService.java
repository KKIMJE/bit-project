package com.bitproject.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bitproject.dao.MemberDao;
import com.bitproject.domain.Member;
import com.bitproject.service.MemberService;

@Service
public class DefaultMemberService implements MemberService {

  @Autowired
  MemberDao memberDao;

  @Override
  public int add(Member member) {
    return memberDao.insert(member);
  }

  @Override
  public Member get(String email, String pwd) {
    return memberDao.findByEmailAndPassword(email, pwd);
  }

  @Override
  public Member get(String email) {
    return memberDao.findByEmail(email);
  }

}

