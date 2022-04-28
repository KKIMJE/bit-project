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
  public List<Store> list() {
    return adminStoreDao.findAll();
  }

  @Override
  public List<Store> pagelist(int pageSize, int pageNo) {
    return adminStoreDao.pageFindAll(pageSize, ((pageNo - 1) * pageSize));
  }

  @Override
  public List<Store> get(String filt, String value) {
    return adminStoreDao.findByValue(filt, value);
  }

  @Override
  public int update(int no) {
    return adminStoreDao.update(no);
  }

  @Override
  public int delete(int no) {
    return adminStoreDao.delete(no);
  }


}