package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.bitproject.domain.AlcoholDetail;

@Mapper
public interface AlcoholDetailDao {

  int countAll();

  int countByTarget(int targetNo);

  List<AlcoholDetail> findAll(@Param("rowCount") int rowCount, @Param("offset") int offset);

  List<AlcoholDetail> findByTarget(@Param("targetNo") int targetNo, @Param("rowCount") int rowCount, @Param("offset") int offset);

  //  int insert(AlcoholDetail alc);

  AlcoholDetail findByNo(int no);



  //  int update(AlcoholDetail alc);

  //  int delete(int no);

  //  int insertType(AlcoholType type);

  //  int deleteType(int no);
}
