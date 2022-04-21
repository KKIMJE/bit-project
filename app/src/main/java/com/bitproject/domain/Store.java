package com.bitproject.domain;

import java.util.List;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Store {
  int storeNo;
  int storeTypeNo;
  int mno;
  int businessRegistrationNo;
  int tagNo;
  String businessRegistration;
  List<AlcoholSales> alcoholSales;
  List<StoreMenu> storeMenu;
  List<StoreImg> storeImg;
  List<Tag> tags;
  String storeName;
  String address;
  String tel;
  String hour;
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