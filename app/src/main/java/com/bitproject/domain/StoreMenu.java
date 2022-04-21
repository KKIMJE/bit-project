package com.bitproject.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class StoreMenu{

  int storeMenuNo;
  int storeNo;
  String storeMenuName;
  String storeMenuPrice;
  boolean mainAccept;

}