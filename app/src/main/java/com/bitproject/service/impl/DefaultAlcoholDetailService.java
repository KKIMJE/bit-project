package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bitproject.dao.AlcoholDetailDao;
import com.bitproject.domain.AlcoholDetail;
import com.bitproject.service.AlcoholDetailService;

@Service
public class DefaultAlcoholDetailService implements AlcoholDetailService {

  @Autowired
  AlcoholDetailDao alcoholDetailDao;

  @Override
  public List<AlcoholDetail> list(int pageSize, int pageNo) {
    return alcoholDetailDao.findAll(pageSize, ((pageNo - 1) * pageSize));
  }

  @Override
  public AlcoholDetail get(int no) {
    AlcoholDetail alcoholDetail = alcoholDetailDao.findByNo(no);
    return alcoholDetail;
  }

  @Override
  public int size() {
    return alcoholDetailDao.countAll();
  }

  //  @Override
  //  public int add(AlcoholDetail alcoholDetail) {
  //    return 0;
  //  }


  //  @Override
  //  public int update(AlcoholDetail alcoholDetail) {
  //    return 0;
  //  }

  //  @Override
  //  public int delete(AlcoholDetail alcoholDetail) {
  //    return 0;
  //  }


}
