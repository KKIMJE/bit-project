package com.bitproject.service.impl;



import java.util.List;
import javax.servlet.http.HttpSession;
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
  public List<Member> list() {
    return adminMemberDao.findAll();
  }

  @Override
  public List<Member> pagelist(int pageSize, int pageNo) {
    return adminMemberDao.pageFindAll(pageSize, ((pageNo - 1) * pageSize));
  }

  @Override
  public int size() {
    return adminMemberDao.countAll();
  }

  @Override
  public int typeSize(boolean memberStatus) {
    return adminMemberDao.countByMemberType(memberStatus);
  }

  @Override
  public List<Member> get(String filt, String value) {
    return adminMemberDao.findByValue(filt, value);
  }

  @Override
  public int update(int no) {
    return adminMemberDao.update(no);
  }

  @Override
  public void logout(HttpSession session) {
    // 세션을 모두 초기화시킴 (로그아웃이므로 세션에 저장된 회원정보를 없애야 한다.)
    // invalidate()메소드를 사용하면 사용자의 id까지 바뀌어버린다.
    session.invalidate();
  }

  @Override
  public int delete(int no) {
    return adminMemberDao.delete(no);

  }



}