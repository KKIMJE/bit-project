package com.bitproject.domain;

public class StoreTag{

  int tagNo;
  int storeNo;


  @Override
  public String toString() {
    return "StoreTag [tagNo=" + tagNo + ", storeNo=" + storeNo + "]";
  }

  public int getTagNo() {
    return tagNo;
  }
  public void setTagNo(int tagNo) {
    this.tagNo = tagNo;
  }
  public int getStoreNo() {
    return storeNo;
  }
  public void setStoreNo(int storeNo) {
    this.storeNo = storeNo;
  }

}