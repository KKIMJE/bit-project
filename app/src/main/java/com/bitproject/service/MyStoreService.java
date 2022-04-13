package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.MyStore;

public interface MyStoreService {

  int add(MyStore mystore);

  List<MyStore> list();

  MyStore get(int no);

  int update(MyStore mystore);

  int delete(MyStore mystore);
}
