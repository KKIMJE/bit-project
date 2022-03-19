package com.bitproject.domain;

public class StoreSectionType{

  int storeTypeNo;
  int storeNo;

  @Override
  public String toString() {
    return "StoreSectionType [storeTypeNo=" + storeTypeNo + ", storeNo=" + storeNo + "]";
  }


  public int getStoreTypeNo() {
    return storeTypeNo;
  }
  public void setStoreTypeNo(int storeTypeNo) {
    this.storeTypeNo = storeTypeNo;
  }
  public int getStoreNo() {
    return storeNo;
  }
  public void setStoreNo(int storeNo) {
    this.storeNo = storeNo;
  }



}