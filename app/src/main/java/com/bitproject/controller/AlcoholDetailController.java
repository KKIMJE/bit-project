package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.AlcoholDetailDao;
import com.bitproject.domain.AlcoholDetail;

@RestController 
public class AlcoholDetailController {

  @Autowired
  AlcoholDetailDao alcoholDetailDao;

  @RequestMapping("/alcohol/list")
  public Object list() {
    return alcoholDetailDao.findAll();
  }

  @RequestMapping("/alcohol/add")
  public Object add(AlcoholDetail alcoholDetail) {
    return alcoholDetailDao.insert(alcoholDetail);
  }


  @RequestMapping("/alcohol/get")
  public Object get(int no) {
    AlcoholDetail alcoholDetail = alcoholDetailDao.findByNo(no);
    if (alcoholDetail == null) {
      return "";
    }
    return alcoholDetail;
  }


  @RequestMapping("/alcohol/update")
  public Object update(AlcoholDetail alcoholDetail) {
    return alcoholDetailDao.update(alcoholDetail);
  }

  @RequestMapping("/alcohol/delete")
  public Object delete(int no) {
    return alcoholDetailDao.delete(no);
  }
}
