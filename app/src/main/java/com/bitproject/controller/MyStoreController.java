package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.StoreDao;
import com.bitproject.domain.Store;

@RestController 
public class MyStoreController {


  @Autowired
  StoreDao storeDao;

  @RequestMapping("/Mystore/list")
  public Object list() {
    return storeDao.findAll();
  }

  @RequestMapping("/Mystore/add")
  public Object add(Store store) {
    return storeDao.insert(store);
  }


  @RequestMapping("/Mystore/get")
  public Object get(int no) {
    Store store = storeDao.findByNo(no);
    if (store == null) {
      return "";
    }
    return store;
  }

  @RequestMapping("/Mystore/update")
  public Object update(Store store) {
    return storeDao.update(store);
  }

  @RequestMapping("/Mystore/delete")
  public Object delete(Store no) {
    return storeDao.delete(no);
  }
}
