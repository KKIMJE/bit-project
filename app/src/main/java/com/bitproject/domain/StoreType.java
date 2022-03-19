package com.bitproject.domain;

public class StoreType{

  int storeTypeNo;
  String typeName;

  @Override
  public String toString() {
    return "StoreType [storeTypeNo=" + storeTypeNo + ", typeName=" + typeName + "]";
  }

  public int getStoreTypeNo() {
    return storeTypeNo;
  }
  public void setStoreTypeNo(int storeTypeNo) {
    this.storeTypeNo = storeTypeNo;
  }
  public String getTypeName() {
    return typeName;
  }
  public void setTypeName(String typeName) {
    this.typeName = typeName;
  }


}