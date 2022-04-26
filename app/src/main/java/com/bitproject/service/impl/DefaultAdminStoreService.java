package com.bitproject.service.impl;



import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bitproject.dao.AdminStoreDao;
import com.bitproject.domain.Store;
import com.bitproject.service.AdminStoreService;



@Service

public class DefaultAdminStoreService implements AdminStoreService {



  @Autowired

  AdminStoreDao adminStoreDao;



  @Override
  public int size() {
    return adminStoreDao.countAll();
  }



  @Override
  public List<Store> list(int pageSize, int pageNo) {
    return adminStoreDao.findAll(pageSize, pageNo);

  }



  @Override
  public List<Store> get(String filt, String value) {
    return adminStoreDao.findByValue(filt, value);
  }




}