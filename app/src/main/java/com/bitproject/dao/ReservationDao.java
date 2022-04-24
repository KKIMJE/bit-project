package com.bitproject.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bitproject.domain.Reservation;

@Mapper  
public interface ReservationDao {

  List<Reservation> findAll();

  int insert(Reservation reservation);

  List<Reservation> findByNo(int no);

  int update(Reservation reservation);

  int delete(int no);

}