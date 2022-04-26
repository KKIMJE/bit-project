package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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
  public List<AlcoholDetail> targetList(int targetNo, int pageSize, int pageNo) {
    return alcoholDetailDao.findByTarget(targetNo, pageSize, ((pageNo - 1) * pageSize));
  }

  @Transactional
  @Override
  public int add(AlcoholDetail alcoholDetail) {
    return alcoholDetailDao.insert(alcoholDetail);

  }

  @Override
  public AlcoholDetail get(int no) {
    AlcoholDetail alcoholDetail = alcoholDetailDao.findByNo(no);
    return alcoholDetail;
  }

  @Override
  public List<AlcoholDetail> get(String filt, String value) {
    List<AlcoholDetail> alcoholDetail = alcoholDetailDao.findByValue(filt, value);
    return alcoholDetail;
  }

  @Override
  public int size() {
    return alcoholDetailDao.countAll();
  }

  @Override
  public int targetSize(int targetNo) {
    return alcoholDetailDao.countByTarget(targetNo);
  }

  @Transactional
  @Override
  public int update(AlcoholDetail alcoholDetail) {
    return alcoholDetailDao.update(alcoholDetail);
  }

  @Override
  public int delete(AlcoholDetail alcoholDetail) {
    return alcoholDetailDao.delete(alcoholDetail);
  }


}
