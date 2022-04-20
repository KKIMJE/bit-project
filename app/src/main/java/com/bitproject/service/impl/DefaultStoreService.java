package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bitproject.dao.StoreDao;
import com.bitproject.domain.Store;
import com.bitproject.service.StoreService;
//
@Service // Spring IoC 컨테이너가 객체를 만들어 저장할 때 클래스 이름을 사용한다. 예) defaultBoardService
public class DefaultStoreService  implements StoreService {

  @Autowired
  StoreDao storeDao;

  @Override
  @Transactional
  public int add(Store store) {
    return storeDao.insert(store);
  }

  @Override
  public List<Store> list() {
    return storeDao.findAll();
  }

  @Override
  public Store get(int no) {
    Store store = storeDao.findByNo(no);
    return store;
  }

  @Override
  @Transactional
  public int update(Store store) {
    return storeDao.update(store);
  }

  @Override
  @Transactional
  public int delete(int no) {
    return storeDao.delete(no);
  }

  @Override
  public int getCountMno(int no) {
    return storeDao.findByNoCountMno(no);
  }

  @Override
  public List<Store> findByStoreAlc(int no) {
    return storeDao.findByStoreAlc(no);
  }

}
