package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.Review;

@Mapper  

public interface ReviewDao {

  List<Review> findAll();

  int insert(Review review);

  Review findByNo(int no);

  int update(Review review);

  int delete(int no);

}