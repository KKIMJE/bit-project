package com.bitproject.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.ReviewDao;
import com.bitproject.domain.Review;

@RestController 
public class ReviewController {

  @Autowired
  ReviewDao reviewDao;

  @RequestMapping("/review/list")
  public Object list() {
    return reviewDao.findAll();
  }

  @RequestMapping("/review/add")
  public Object add(Review review) {
    return reviewDao.insert(review);
  }


  @RequestMapping("/review/get")
  public List<Review> get(int no) {
    List<Review> review = reviewDao.findByNo(no);
    if (review == null) {
      return review;
    }
    return review;
  }

  @RequestMapping("/review/update")
  public Object update(Review review) {
    return reviewDao.update(review);
  }

  @RequestMapping("/review/delete")
  public Object delete(int no) {
    return reviewDao.delete(no);
  }
}
