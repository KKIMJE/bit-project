package com.bitproject.domain;

import java.util.List;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Reservation {

  int reservationNo;
  int storeNo;
  int people; // 인원
  int payNo; // 승인번호
  int status; // 예약상태
  int mno;
  String PayCompany;
  String name;
  String tel;
  String request;
  java.sql.Timestamp date;
  java.sql.Timestamp payDate;
  List<Member> member;

}
