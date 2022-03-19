package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.StoreTypeDao;
import com.bitproject.domain.StoreType;

@RestController 
public class StoreTypeController {

  // @Autowired
  // - 필드 선언부에 이 애노테이션을 붙여서 표시해 두면, 
  //   Spring Boot가 InquiryController 객체를 만들 때 InquiryDao 구현체를 찾아 자동으로 주입한다. 
  //
  @Autowired
  StoreTypeDao storeTypeDao;

  @RequestMapping("/storeType/list")
  public Object list() {
    return storeTypeDao.findAll();
  }

  @RequestMapping("/storeType/add")
  public Object add(StoreType storeType) {
    return storeTypeDao.insert(storeType);
  }


  @RequestMapping("/storeType/get")
  public Object get(int no) {
    StoreType storetype = storeTypeDao.findByNo(no);
    if (storetype == null) {
      return "";
    }
    return storetype;
  }

  @RequestMapping("/storeType/update")
  public Object update(StoreType storetype) {
    return storeTypeDao.update(storetype);
  }

  @RequestMapping("/storeType/delete")
  public Object delete(int no) {
    return storeTypeDao.delete(no);
  }
}
