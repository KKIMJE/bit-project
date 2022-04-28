package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bitproject.dao.StoreTagDao;
import com.bitproject.domain.StoreTag;
import com.bitproject.service.StoreTagService;
//
@Service // Spring IoC 컨테이너가 객체를 만들어 저장할 때 클래스 이름을 사용한다. 예) defaultBoardService
public class DefaultStoreTagService  implements StoreTagService {

  @Autowired
  StoreTagDao storeTagDao;

  @Override
  @Transactional
  public int add(StoreTag storeTag) {
    return storeTagDao.insert(storeTag);
  }

  @Override
  public List<StoreTag> list() {
    return storeTagDao.findAll();
  }

  @Override
  public StoreTag get(int no) {
    StoreTag storeTag = storeTagDao.findByNo(no);
    return storeTag;
  }

  @Override
  @Transactional
  public int update(StoreTag storeTag) {
    return storeTagDao.update(storeTag);
  }

  @Override
  public int delete(int no) {
    return storeTagDao.delete(no);
  }



}