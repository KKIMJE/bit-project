package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.MyStore;

@Mapper  
public interface MyStoreDao {
  
  int countAll();
  
  List<MyStore> findAll();

  int insert(MyStore mystore);

  MyStore findByNo(int no);

  int update(MyStore mystore);

  int delete(MyStore mystore);

}