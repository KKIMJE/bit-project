package com.bitproject.service.impl;



import javax.servlet.http.HttpSession;
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

  @Override
  public int emailCheck(String email) {
    int result = memberDao.emailCheck(email);
    return result;    
  }




  @Override
  public void logout(HttpSession session) {
    // 세션을 모두 초기화시킴 (로그아웃이므로 세션에 저장된 회원정보를 없애야 한다.)
    // invalidate()메소드를 사용하면 사용자의 id까지 바뀌어버린다.
    session.invalidate();
  }


}