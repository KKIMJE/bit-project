package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.StoreTag;
//
public interface StoreTagService {

  List<StoreTag> list();

  StoreTag get(int no);

  int update(StoreTag storeTag);

  int delete(int no);

  int add(StoreTag storeTag);

}