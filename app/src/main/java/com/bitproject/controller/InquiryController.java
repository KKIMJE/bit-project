package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.InquiryDao;
import com.bitproject.domain.Inquiry;

@RestController 
public class InquiryController {

  // @Autowired
  // - 필드 선언부에 이 애노테이션을 붙여서 표시해 두면, 
  //   Spring Boot가 InquiryController 객체를 만들 때 InquiryDao 구현체를 찾아 자동으로 주입한다. 
  //
  @Autowired
  InquiryDao inquiryDao;

  @RequestMapping("/inquiry/list")
  public Object list() {
    return inquiryDao.findAll();
  }

  @RequestMapping("/inquiry/add")
  public Object add(Inquiry inquiry) {
    return inquiryDao.insert(inquiry);
  }


  @RequestMapping("/inquiry/get")
  public Object get(int no) {
    Inquiry inquiry = inquiryDao.findByNo(no);
    if (inquiry == null) {
      return "";
    }
    inquiryDao.increaseViewCount(no);
    return inquiry;
  }

  @RequestMapping("/inquiry/update")
  public Object update(Inquiry inquiry) {
    return inquiryDao.update(inquiry);
  }

  @RequestMapping("/inquiry/delete")
  public Object delete(int no) {
    return inquiryDao.delete(no);
  }
}
