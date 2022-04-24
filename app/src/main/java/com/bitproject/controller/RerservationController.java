package com.bitproject.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.ReservationDao;
import com.bitproject.domain.Reservation;

@RestController 
public class RerservationController {

  @Autowired
  ReservationDao reservationDao;

  @RequestMapping("/reservation/list")
  public Object list() {
    return reservationDao.findAll();
  }

  @RequestMapping("/reservation/add")
  public Object add(Reservation reservation) {
    return reservationDao.insert(reservation);
  }


  @RequestMapping("/reservation/get")
  public List<Reservation> get(int no) {
    List<Reservation> reservation = reservationDao.findByNo(no);
    if (reservation == null) {
      return reservation;
    }
    return reservation;
  }

  @RequestMapping("/reservation/update")
  public Object update(Reservation reservation) {
    return reservationDao.update(reservation);
  }

  @RequestMapping("/reservation/delete")
  public Object delete(int no) {
    return reservationDao.delete(no);
  }
}
