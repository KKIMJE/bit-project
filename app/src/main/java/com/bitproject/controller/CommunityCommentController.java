package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.CommunityCommentDao;
import com.bitproject.domain.CommunityComment;

@RestController
public class CommunityCommentController {

  @Autowired
  CommunityCommentDao communityCommentDao;

  @RequestMapping("/communityComment/list")
  public Object list() {
    return communityCommentDao.findAll();
  }

  @RequestMapping("/communityComment/add")
  public Object add(CommunityComment communityComment) {
    return communityCommentDao.insert(communityComment);
  }


  @RequestMapping("/communityComment/get")
  public Object get(int no) {
    CommunityComment communityComment = communityCommentDao.findByNo(no);
    if (communityComment == null) {
      return "";
    }

    return communityComment;
  }

  @RequestMapping("/communityComment/getByBoardNo")
  public Object getByBoardNo(int no) {
    //    CommunityComment communityComment = communityCommentDao.findByBoardNo(no);
    //    if (communityComment == null) {
    //      return "";
    //    }
    //
    //    return communityComment;

    return  communityCommentDao.findByBoardNo(no);

  }


  @RequestMapping("communityComment/update")
  public Object update(CommunityComment communityComment){
    return communityCommentDao.update(communityComment);
  }

  @RequestMapping("communityComment/delete")
  public Object delete(int no) {
    return communityCommentDao.delete(no);
  }
}
