package com.bitproject.domain;

public class Tag{


  int tagNo;
  int storeNo;
  String name;



  @Override
  public String toString() {
    return "Tag [tagNo=" + tagNo + ", storeNo=" + storeNo + ", name=" + name + "]";
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
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }



}