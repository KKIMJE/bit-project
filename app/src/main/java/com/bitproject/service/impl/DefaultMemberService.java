package com.bitproject.service.impl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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

  public Member getMemberByEmailAndPassword(String email, String password) {

    return memberDao.findByEmailAndPassword(email, password);

  }



  @Override

  public Member getMemberByEmail(String email) {

    return memberDao.findByEmail(email);

  }

  

  @Override

  public Member getMemberByMno(int mno) {

    return memberDao.findByMno(mno);

  }

 

  @Override

  @Transactional

  public int update(Member member) {

    return memberDao.update(member);

  }

  

  

}