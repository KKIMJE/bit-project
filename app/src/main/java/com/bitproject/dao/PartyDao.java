package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.Party;

@Mapper  
public interface PartyDao {

  List<Party> findAll();

  int insert(Party party);

  Party findByNo(int no);

  int update(Party party);

  int delete(int no);
}
