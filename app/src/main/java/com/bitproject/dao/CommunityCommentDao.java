package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.CommunityComment;

@Mapper  
public interface CommunityCommentDao {

  List<CommunityComment> findAll();

  int insert(CommunityComment communityComment);

  CommunityComment findByNo(int no);

  List<CommunityComment> findByBoardNo(int no);

  int update(CommunityComment communityComment);

  int delete(int no);

}











