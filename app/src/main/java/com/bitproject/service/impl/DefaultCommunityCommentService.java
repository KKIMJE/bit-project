package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bitproject.dao.CommunityCommentDao;
import com.bitproject.domain.CommunityComment;
import com.bitproject.service.CommunityCommentService;

@Service
public class DefaultCommunityCommentService implements CommunityCommentService {

  @Autowired
  CommunityCommentDao communityCommentDao;

  @Override
  public int add(CommunityComment communityComment) {
    return communityCommentDao.insert(communityComment);
  }

  @Override
  public List<CommunityComment> list() {
    return communityCommentDao.findAll();
  }

  @Override
  public CommunityComment get(int no) {
    CommunityComment communityComment = communityCommentDao.findByNo(no);
    return communityComment;
  }

  @Override
  @Transactional
  public int update(CommunityComment communityComment) {
    return communityCommentDao.update(communityComment);
  }

  @Override
  @Transactional
  public int delete(int no) {
    return communityCommentDao.delete(no);
  }


}
