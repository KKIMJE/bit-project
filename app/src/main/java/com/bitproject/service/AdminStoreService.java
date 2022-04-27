package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.Store;

public interface AdminStoreService {

  int size();

  List<Store> list(int pageSize, int pageNo);

  List<Store> get(String filt, String value);

}
