package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.Notice;

@Mapper
public interface NoticeDao {

  List<Notice> findAll();

  int insert(Notice notice);

  Notice findByNo(int no);

  int update(Notice notice);

  int delete(int no);

  int increaseViewCount(int no);
}