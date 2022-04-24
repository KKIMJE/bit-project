package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.Reservation;

public interface ReservationService {

  int add(Reservation reservation);

  List<Reservation> list();

  List<Reservation> get(int no);

  int update(Reservation reservation);

  int delete(int no);

}
