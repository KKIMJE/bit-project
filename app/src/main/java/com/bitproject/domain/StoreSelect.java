package com.bitproject.domain;

public class StoreSelect{

  int storeNo;
  int mNo;

  @Override
  public String toString() {
    return "StoreSelect [storeNo=" + storeNo + ", mNo=" + mNo + "]";
  }


  public int getStoreNo() {
    return storeNo;
  }
  public void setStoreNo(int storeNo) {
    this.storeNo = storeNo;
  }
  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
  }



}