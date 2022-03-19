package com.bitproject.domain;

public class StoreImg{

  int StoreImgNo;
  int storeNo;
  String img;

  @Override
  public String toString() {
    return "StoreImg [StoreImgNo=" + StoreImgNo + ", storeNo=" + storeNo + ", img=" + img + "]";
  }


  public int getStoreImgNo() {
    return StoreImgNo;
  }
  public void setStoreImgNo(int storeImgNo) {
    StoreImgNo = storeImgNo;
  }
  public int getStoreNo() {
    return storeNo;
  }
  public void setStoreNo(int storeNo) {
    this.storeNo = storeNo;
  }
  public String getImg() {
    return img;
  }
  public void setImg(String img) {
    this.img = img;
  }




}