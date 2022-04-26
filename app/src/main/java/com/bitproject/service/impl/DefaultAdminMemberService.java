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

  @Override
  public int typeSize(boolean memberStatus) {
    return adminMemberDao.countByMemberType(memberStatus);
  }

  @Override
  public List<Member> get(String filt, String value) {
    return adminMemberDao.findByValue(filt, value);
  }



}