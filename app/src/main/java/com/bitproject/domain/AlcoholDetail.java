package com.bitproject.domain;

import java.util.List;
import lombok.Data;

@Data
public class AlcoholDetail {
  Member writer;
  int alcoholDetailNo;
  int alcoholTypeNo;
  String alcoholName;
  float degree;
  String brand;
  String origin;
  int volume;
  String characteristic;
  String img;
  List<Store> stores;
  List<StoreImg> storeImgs;
  List<AlcoholSales> alcoholSales;
}
