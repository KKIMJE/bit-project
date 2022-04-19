package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bitproject.dao.CommunityDao;
import com.bitproject.domain.CommunityMain;
import com.bitproject.service.CommunityService;

@Service // Spring IoC 컨테이너가 객체를 만들어 저장할 때 클래스 이름을 사용한다. 예) defaultBoardService
public class DefaultCommunityService implements CommunityService {

  @Autowired
  CommunityDao communityDao;

  @Override
  @Transactional
  public int add(CommunityMain communityMain) {
    return communityDao.insert(communityMain);
  }

  @Override
  public List<CommunityMain> list() {
    return communityDao.findAll();
  }

  @Override
  public CommunityMain get(int no) {
    CommunityMain communityMain = communityDao.findByNo(no);
    return communityMain;
  }

  @Override
  @Transactional
  public int update(CommunityMain communityMain) {
    return communityDao.update(communityMain);
  }

  @Override
  @Transactional
  public int delete(int no) {
    return communityDao.delete(no);
  }

}
