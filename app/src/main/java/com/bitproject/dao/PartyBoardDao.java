package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.PartyBoard;

@Mapper  
public interface PartyBoardDao {

  int insert(PartyBoard partyBoard);

  List<PartyBoard> findByNo(int no);
}











