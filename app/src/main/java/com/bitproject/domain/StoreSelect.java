package com.bitproject.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class StoreSelect{

  int storeNo;
  int mNo;

}