package com.bitproject.domain;

import lombok.Data;

@Data
public class Store {

  int storeNo;
  int businessRegistrationNo;
  String businessRegistration;
  String name;
  String address;
  String tel;
  java.sql.Time hour;
  String introduction;
  float evaluationScore;
  boolean reservationAccept;
  int maxMember;
  float lat;
  float lng;
  String placeId;
  boolean oper;
  boolean status;
}