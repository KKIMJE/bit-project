package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.Store;

public interface AdminStoreService {

  int size();

  List<Store> list();

  List<Store> pagelist(int pageSize, int pageNo);

  List<Store> get(String filt, String value);

  int update(int no);

  int delete(int no);

}
