package com.bitproject.service;

import com.bitproject.domain.Review;

public interface ReviewService {

  int add(Review review);

  Review get(int no);

  int update(Review review);

  int delete(int no);

}
