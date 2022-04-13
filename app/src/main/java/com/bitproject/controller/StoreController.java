package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.StoreDao;
import com.bitproject.domain.Store;

@RestController 
public class StoreController {


  @Autowired
  StoreDao storeDao;

  @RequestMapping("/store/list")
  public Object list() {
    return storeDao.findAll();
  }

  @RequestMapping("/store/add")
  public Object add(Store store) {
    return storeDao.insert(store);
  }


  @RequestMapping("/store/get")
  public Object get(int no) {
    Store store = storeDao.findByNo(no);
    if (store == null) {
      return "";
    }
    return store;
  }

  @RequestMapping("/store/update")
  public Object update(Store store) {
    return storeDao.update(store);
  }

  @RequestMapping("/store/delete")
  public Object delete(Store no) {
    return storeDao.delete(no);
  }
}
