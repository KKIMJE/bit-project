package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bitproject.dao.ReviewDao;
import com.bitproject.domain.Review;
import com.bitproject.service.ReviewService;

@Service // Spring IoC 컨테이너가 객체를 만들어 저장할 때 클래스 이름을 사용한다. 예) defaultBoardService
public class DefaultReviewService  implements ReviewService {

  @Autowired
  ReviewDao reviewdao;

  @Override
  @Transactional
  public int add(Review review) {
    return reviewdao.insert(review);
  }

  @Override
  public List<Review> get(int no) {
    List<Review> review = reviewdao.findByNo(no);
    return review;
  }

  @Override
  @Transactional
  public int update(Review review) {
    return reviewdao.update(review);
  }

  @Override
  @Transactional
  public int delete(int no) {
    return reviewdao.delete(no);
  }

}