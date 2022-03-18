package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.AlcmgmtDao;
import com.bitproject.domain.Alcohol_management;

@RestController
public class AlcmgmtController {

  @Autowired 
  AlcmgmtDao alcmgmtDao;
  
  @RequestMapping("/alcmgmt/list")
  public Object list()  {
    return alcmgmtDao.findAll(); 
  }

  @RequestMapping("/alcmgmt/add")
  public Object add(Alcohol_management alcmgmt)  {
    return alcmgmtDao.insert(alcmgmt);
  }


  @RequestMapping("/alcmgmt/get")
  public Object get(int no)  {
    Alcohol_management alcmgmt= alcmgmtDao.findByNo(no);
    return alcmgmt != null ? alcmgmt : "";
  }

  @RequestMapping("/alcmgmt/update")
  public Object update (Alcohol_management alcmgmt)  {
    return alcmgmtDao.update(alcmgmt);
  }

  @RequestMapping("/alcmgmt/delete")
  public Object delete(int no)  {
    return alcmgmtDao.delete(no);
  }
}
  

