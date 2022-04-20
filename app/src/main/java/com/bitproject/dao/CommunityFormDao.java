package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.CommunityForm;

@Mapper  
public interface CommunityFormDao {

  List<CommunityForm> findAll();

  int insert(CommunityForm communityForm);

  CommunityForm findByNo(int no);

  int update(CommunityForm communityForm);

  int delete(int no);
}











