package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.bitproject.domain.Notice;

@Mapper
public interface NoticeDao {

  int countAll();

  List<Notice> findAll(@Param("rowCount") int rowCount, @Param("offset") int offset);

  int insert(Notice notice);

  Notice findByNo(int no);

  int delete(int no);

  int increaseViewCount(int no);
}