package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.Store;
//
public interface StoreService {

  int add(Store store);

  List<Store> list();

  Store get(int no);

  int getCountMno(int no);

  int update(Store store);

  int delete(int no);

  List<Store> findByStoreAlc(int no);

}