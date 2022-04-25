package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.AlcoholDetail;

public interface AlcoholDetailService {

  //  int add(AlcoholDetail alcoholDetail);

  List<AlcoholDetail> list(int pageSize, int pageNo);

  List<AlcoholDetail> targetList(int targetNo, int pageSize, int pageNo);

  AlcoholDetail get(int no);

  List<AlcoholDetail> get(String filt, String value);

  int size();

  int targetSize(int targetNo);

  //  int update(AlcoholDetail alcoholDetail);

  //  int delete(AlcoholDetail alcoholDetail);
}
