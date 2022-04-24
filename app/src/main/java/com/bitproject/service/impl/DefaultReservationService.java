package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bitproject.dao.ReservationDao;
import com.bitproject.domain.Reservation;
import com.bitproject.service.ReservationService;

@Service // Spring IoC 컨테이너가 객체를 만들어 저장할 때 클래스 이름을 사용한다. 예) defaultBoardService
public class DefaultReservationService  implements ReservationService {

  @Autowired
  ReservationDao reservationDao;

  @Override
  public List<Reservation> list() {
    return reservationDao.findAll();
  }

  @Override
  public List<Reservation> get(int no) {
    List<Reservation> reservation = reservationDao.findByNo(no);
    return reservation;
  }

  @Override
  public int update(Reservation reservation) {
    return reservationDao.update(reservation);
  }

  @Override
  @Transactional
  public int add(Reservation reservation) {
    return reservationDao.insert(reservation);
  }

  @Override
  @Transactional
  public int delete(int no) {
    return reservationDao.delete(no);
  }

}

