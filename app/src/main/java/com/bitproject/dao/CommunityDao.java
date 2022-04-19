package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.CommunityMain;

@Mapper  
public interface CommunityDao {

  List<CommunityMain> findAll();

  int insert(CommunityMain communityMain);

  CommunityMain findByNo(int no);

  int update(CommunityMain communityMain);

  int delete(int no);
}











