package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bitproject.dao.MyStoreDao;
import com.bitproject.domain.MyStore;
import com.bitproject.service.MyStoreService;

@Service // Spring IoC 컨테이너가 객체를 만들어 저장할 때 클래스 이름을 사용한다. 예) defaultBoardService
public class DefaultMyStoreService  implements MyStoreService {

  @Autowired
  MyStoreDao mystoreDao;

  @Override
  @Transactional
  public int add(MyStore mystore) {
    return mystoreDao.insert(mystore);
  }

  @Override
  public List<MyStore> list() {
    return mystoreDao.findAll();
  }

  @Override
  public MyStore get(int no) {
    MyStore mystore = mystoreDao.findByNo(no);
    return mystore;
  }

  @Override
  @Transactional
  public int update(MyStore mystore) {
    return mystoreDao.update(mystore);
  }

  @Override
  @Transactional
  public int delete(MyStore mystore) {
    return mystoreDao.delete(mystore);
  }

}
