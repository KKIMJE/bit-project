package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.StoreTagDao;
import com.bitproject.domain.StoreTag;

@RestController 
public class StoreTagController {

  // @Autowired
  // - 필드 선언부에 이 애노테이션을 붙여서 표시해 두면, 
  //   Spring Boot가 InquiryController 객체를 만들 때 InquiryDao 구현체를 찾아 자동으로 주입한다. 
  //
  @Autowired
  StoreTagDao storeTagDao;

  @RequestMapping("/storeTag/list")
  public Object list() {
    return storeTagDao.findAll();
  }

  @RequestMapping("/storeTag/add")
  public Object add(StoreTag storeTag) {
    return storeTagDao.insert(storeTag);
  }


  @RequestMapping("/storeTag/get")
  public Object get(int no) {
    StoreTag storetag = storeTagDao.findByNo(no);
    if (storetag == null) {
      return "";
    }
    return storetag;
  }

  @RequestMapping("/storeTag/update")
  public Object update(StoreTag storetag) {
    return storeTagDao.update(storetag);
  }

  @RequestMapping("/storeTag/delete")
  public Object delete(int no) {
    return storeTagDao.delete(no);
  }
}
