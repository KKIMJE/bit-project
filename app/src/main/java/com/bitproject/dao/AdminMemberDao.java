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

  //  int countAll();
  //
  //  List<Member> findAll();
  //
  //  int insert(Member member);
  //
  //  Member findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
  //
  //  Member findByEmail(String email);
  //
  //  Member findByMno(int no);
  //
  int update(int no);



}











