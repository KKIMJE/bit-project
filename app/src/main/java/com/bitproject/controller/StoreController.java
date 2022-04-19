package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Store;
import com.bitproject.service.StoreService;

@RestController 
public class StoreController {

  @Autowired
  StoreService storeService;

  //  @Autowired
  //  StoreDao storeDao;

  @RequestMapping("/store/list")
  public Object list() {
    return storeService.list();
  }

  @RequestMapping("/store/add")
  public Object add(Store store) {
    //System.out.println("store: " + store);
    return storeService.add(store);
  }


  @RequestMapping("/store/get")
  public Object get(int no) {
    Store store = storeService.get(no);
    //System.out.println("StoreNo: " + no + ", Get Store: " + store);
    if (store == null) {
      return "";
    }
    return store;
  }

  @RequestMapping("/store/getMnoCnt")
  public int getMnoCnt(int no) {
    //System.out.println("StoreNo: " + no + ", Get Store: " + store);
    return storeService.getCountMno(no);
  }

  @PostMapping("/store/update")
  public Object update(Store store) {
    //System.out.println("Before Update: " + store);
    //System.out.println("After Update: " + storeService.update(store));
    return storeService.update(store);
  }

  @RequestMapping("/store/delete")
  public int delete(int no) {
    //System.out.println("Delete: " + no);
    int row_num = storeService.delete(no);
    //System.out.println("After Update: " + row_num);
    return row_num;
    // return storeService.delete(no);
  }

  //  @RequestMapping("/store/error")
  //  public error(Store no) {
  //    return storeService.error(no);
  //  }


}
