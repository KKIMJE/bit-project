package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.bitproject.domain.Store;

@Mapper  
public interface AdminStoreDao {

  //  List<Member> findAll(@Param("rowCount") int rowCount, @Param("offset") int offset);

  int countAll();

  List<Store> findAll();

  List<Store> pageFindAll(@Param("rowCount") int rowCount, @Param("offset") int offset);

  List<Store> findByValue(@Param("filt") String filt, @Param("value") String value);

  int update(int no);

  int delete(int no);


}











