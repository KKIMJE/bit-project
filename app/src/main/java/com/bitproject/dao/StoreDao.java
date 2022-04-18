package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.Store;

@Mapper  
public interface StoreDao {
 
  List<Store> findAll();

  int insert(Store store);

  Store findByNo(int no);

  int update(Store store);

  int delete(int no);

  Object error(Store no);

}