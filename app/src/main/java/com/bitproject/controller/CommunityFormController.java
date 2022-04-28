package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.CommunityFormDao;
import com.bitproject.domain.CommunityForm;

@RestController
public class CommunityFormController {



  @Autowired
  CommunityFormDao communityFormDao;


  @RequestMapping("/communityForm/list")
  public Object list() {
    return communityFormDao.findAll();
  }

  @RequestMapping("/communityForm/add")
  public Object add(CommunityForm communityForm) {
    return communityFormDao.insert(communityForm);
  }


  @RequestMapping("/communityForm/get")
  public Object get(int no) {
    CommunityForm communityForm = communityFormDao.findByNo(no);
    if (communityForm == null) {
      return "";
    }
    return communityForm;
  }

  @RequestMapping("communityForm/update")
  public Object update(CommunityForm communityForm){
    return communityFormDao.update(communityForm);
  }

  @RequestMapping("communityForm/delete")
  public Object delete(int no) {
    return communityFormDao.delete(no);
  }
}
