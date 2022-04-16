package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.AlcoholDetail;

public interface AlcoholDetailService {

  //  int add(AlcoholDetail alcoholDetail);

  List<AlcoholDetail> list(int pageSize, int pageNo);

  AlcoholDetail get(int no);

  int size();

  //  int update(AlcoholDetail alcoholDetail);

  //  int delete(AlcoholDetail alcoholDetail);
}
