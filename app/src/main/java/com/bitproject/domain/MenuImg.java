package com.bitproject.domain;

public class MenuImg{

  int menuImgNo;
  int storeMenuNo;
  String img;

  @Override
  public String toString() {
    return "MenuImg [menuImgNo=" + menuImgNo + ", storeMenuNo=" + storeMenuNo + ", img=" + img
        + "]";
  }


  public int getMenuImgNo() {
    return menuImgNo;
  }
  public void setMenuImgNo(int menuImgNo) {
    this.menuImgNo = menuImgNo;
  }
  public int getStoreMenuNo() {
    return storeMenuNo;
  }
  public void setStoreMenuNo(int storeMenuNo) {
    this.storeMenuNo = storeMenuNo;
  }
  public String getImg() {
    return img;
  }
  public void setImg(String img) {
    this.img = img;
  }




}