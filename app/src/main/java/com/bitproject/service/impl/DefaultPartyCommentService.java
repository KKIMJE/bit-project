package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bitproject.dao.PartyCommentDao;
import com.bitproject.domain.PartyComment;
import com.bitproject.service.PartyCommentService;

@Service // Spring IoC 컨테이너가 객체를 만들어 저장할 때 클래스 이름을 사용한다. 예) defaultBoardService
public class DefaultPartyCommentService implements PartyCommentService {

  @Autowired
  PartyCommentDao partyCommentDao;

  @Override
  public int add(PartyComment partyComment) {
    return partyCommentDao.insert(partyComment);
  }

  @Override
  public List<PartyComment> list() {
    return partyCommentDao.findAll();
  }

  @Override
  public PartyComment get(int no) {
    PartyComment partyComment = partyCommentDao.findByNo(no);
    return partyComment;
  }

  @Override
  @Transactional
  public int update(PartyComment partyComment) {
    return partyCommentDao.update(partyComment);
  }

  @Override
  @Transactional
  public int delete(int no) {
    return partyCommentDao.delete(no);
  }


}
