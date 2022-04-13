package com.bitproject.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class MyStore {

  int storeNo;
  int mno;
  String storeName;
  String address;
  int storeTypeNo;
  String tel;
  java.sql.Time hour;
  String introduction;
  float evaluationScore;
  boolean reservationAccept;
  int maxMember;
  int businessRegistrationNo;
  String businessRegistration;
  float lat;
  float lng;
  String placeId;
  boolean oper;
  boolean status;
}