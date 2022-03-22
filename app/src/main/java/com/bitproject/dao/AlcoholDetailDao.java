package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.AlcoholDetail;

@Mapper  
public interface AlcoholDetailDao {

  int countAll();

  List<AlcoholDetail> findAll();

  int insert(AlcoholDetail alc);

  AlcoholDetail findByNo(int no);

  int update(AlcoholDetail alc);

  int delete(int no);

  //  int insertType(AlcoholType type);

  //  int deleteType(int no);
}











