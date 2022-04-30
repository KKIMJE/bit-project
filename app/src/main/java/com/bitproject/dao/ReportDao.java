package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.bitproject.domain.Report;

@Mapper  
public interface ReportDao {

  int insert(Report report);

  int countByType(String type);

  List<Report> findByType(@Param("type") String type, @Param("rowCount") int rowCount, @Param("offset") int offset);

  List<Report> findAll(String type);

  Report findByNo(int no);

  int update(int no);
}







