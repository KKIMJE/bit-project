package com.bitproject.dao;

import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.Report;

@Mapper  
public interface ReportDao {

  int insert(Report report);
}











