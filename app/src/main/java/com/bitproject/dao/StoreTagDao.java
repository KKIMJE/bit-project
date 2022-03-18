package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.StoreTag;

@Mapper  
public interface StoreTagDao {

  List<StoreTag> findAll();

  int insert(StoreTag storeTag);

  int delete(int no);

}