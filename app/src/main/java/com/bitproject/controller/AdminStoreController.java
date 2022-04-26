package com.bitproject.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Store;
import com.bitproject.service.AdminStoreService;

@RestController 
public class AdminStoreController {

  @Autowired
  AdminStoreService adminStoreService;


  @RequestMapping("/admin/store/size")
  public int size() {
    return adminStoreService.size();
  }

  @RequestMapping("/admin/store/list")
  public Object list(int pageSize, int pageNo) {
    return adminStoreService.list(pageSize, pageNo);
  }

  @RequestMapping("/admin/store/get")
  public List<Store> get(String  filt, String value) {
    List<Store> store = adminStoreService.get(filt, value);
    //    if (member == null) {
    //      return ;
    //    }
    return store;
  }


}

