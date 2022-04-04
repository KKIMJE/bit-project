package com.bitproject.domain;

import java.util.List;
import lombok.Data;

@Data
public class AlcoholDetail {
  int no;
  int alcoholTypeNo;
  String name;
  float degree;
  String brand;
  String origin;
  int volume;
  String characteristic;
  String img;
  List<Store> stores;

}
