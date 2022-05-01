package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.bitproject.domain.Member;

@Mapper  
public interface MemberDao {

  int countAll();

  List<Member> findAll();

  int insert(Member member);

  int delete(int mno);

  Member findByEmailAndPassword(@Param("email") String email, @Param("password") String password);

  Member findByEmail(String email);

  Member findByMno(int no);

  int update(Member member);

  int updatePhoto(Member member);

  int emailCheck(String email); 


}