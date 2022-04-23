package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.PartyComment;

@Mapper  
public interface PartyCommentDao {

  List<PartyComment> findAll();

  int insert(PartyComment partyComment);

  PartyComment findByNo(int no);

  int update(PartyComment partyComment);

  int delete(int no);
}











