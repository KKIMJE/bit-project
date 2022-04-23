package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.Review;

public interface ReviewService {

  int add(Review review);

  List<Review> get(int no);

  int update(Review review);

  int delete(int no);

}
