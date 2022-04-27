package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.bitproject.domain.Member;

@Mapper  
public interface AdminMemberDao {

  List<Member> findAll();

  List<Member> pageFindAll(@Param("rowCount") int rowCount, @Param("offset") int offset);


  int countAll();

  int countByMemberType(boolean memberStatus);

  List<Member> findByValue(@Param("filt") String filt, @Param("value") String value);

  int update(int no);

  int delete(int no);

}











