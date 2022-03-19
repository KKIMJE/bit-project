package com.bitproject.domain;

public class AlcoholSales{

  int storeNo;
  int alcoholDetailNo;
  int price;

  @Override
  public String toString() {
    return "AlcoholSales [storeNo=" + storeNo + ", alcoholDetailNo=" + alcoholDetailNo + ", price="
        + price + "]";
  }


  public int getStoreNo() {
    return storeNo;
  }
  public void setStoreNo(int storeNo) {
    this.storeNo = storeNo;
  }
  public int getAlcoholDetailNo() {
    return alcoholDetailNo;
  }
  public void setAlcoholDetailNo(int alcoholDetailNo) {
    this.alcoholDetailNo = alcoholDetailNo;
  }
  public int getPrice() {
    return price;
  }
  public void setPrice(int price) {
    this.price = price;
  }


}