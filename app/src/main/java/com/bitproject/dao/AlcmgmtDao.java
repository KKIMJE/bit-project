package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.Alcohol_management;

@Mapper
public interface AlcmgmtDao {
  int countAll();

  List<Alcohol_management> findAll();

  int insert(Alcohol_management alcmgmt);

  Alcohol_management findByNo(int no);

  int update(Alcohol_management alcmgmt);

  int delete(int no);
  
 // int increaseAmount(int no); 

  
}

