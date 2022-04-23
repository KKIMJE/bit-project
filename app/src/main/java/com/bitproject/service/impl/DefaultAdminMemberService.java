package com.bitproject.service.impl;



import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bitproject.dao.AdminMemberDao;
import com.bitproject.domain.Member;
import com.bitproject.service.AdminMemberService;



@Service

public class DefaultAdminMemberService implements AdminMemberService {



  @Autowired

  AdminMemberDao adminMemberDao;

  @Override
  public List<Member> list(int pageSize, int pageNo) {
    return adminMemberDao.findAll(pageSize, ((pageNo - 1) * pageSize));
  }

  @Override
  public int size() {
    return adminMemberDao.countAll();
  }



  //  @Override
  //
  //  public int add(Member member) {
  //
  //    return memberDao.insert(member);
  //
  //  }
  //
  //
  //
  //  @Override
  //
  //  public Member getMemberByEmailAndPassword(String email, String password) {
  //
  //    return memberDao.findByEmailAndPassword(email, password);
  //
  //  }
  //
  //
  //
  //  @Override
  //
  //  public Member getMemberByEmail(String email) {
  //
  //    return memberDao.findByEmail(email);
  //
  //  }
  //
  //
  //
  //  @Override
  //
  //  public Member getMemberByMno(int mno) {
  //
  //    return memberDao.findByMno(mno);
  //
  //  }
  //
  //
  //
  //  @Override
  //
  //  @Transactional
  //
  //  public int update(Member member) {
  //
  //    return memberDao.update(member);
  //
  //  }





}