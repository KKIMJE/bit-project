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

  Member findByEmailAndPassword(@Param("email") String email, @Param("pwd") String pwd);

  Member findByEmail(String email);

  Member findByNo(int no);

  int update(Member member);

  int delete(int no);

}











