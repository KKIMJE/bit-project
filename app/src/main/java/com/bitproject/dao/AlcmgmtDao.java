package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.AlcoholManagement;

@Mapper
public interface AlcmgmtDao {
  int countAll();

  List<AlcoholManagement> findAll();

  int insert(AlcoholManagement alcmgmt);

  AlcoholManagement findByNo(int no);

  int update(AlcoholManagement alcmgmt);

  int delete(int no);
  
 // int increaseAmount(int no); 

  
}

