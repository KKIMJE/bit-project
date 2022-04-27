package com.bitproject.domain;

import java.util.List;


public class AlcoholDetail {
  Member writer;
  int alcoholDetailNo;
  int alcoholTypeNo;
  String alcoholName;
  float degree;
  String brand;
  String origin;
  int volume;
  String characteristic;
  String img;
  List<Store> stores;
  List<StoreImg> storeImgs;
  List<AlcoholSales> alcoholSales;
  public Member getWriter() {
    return writer;
  }
  public void setWriter(Member writer) {
    this.writer = writer;
  }
  public int getAlcoholDetailNo() {
    return alcoholDetailNo;
  }
  public void setAlcoholDetailNo(int alcoholDetailNo) {
    this.alcoholDetailNo = alcoholDetailNo;
  }
  public int getAlcoholTypeNo() {
    return alcoholTypeNo;
  }
  public void setAlcoholTypeNo(int alcoholTypeNo) {
    this.alcoholTypeNo = alcoholTypeNo;
  }
  public String getAlcoholName() {
    return alcoholName;
  }
  public void setAlcoholName(String alcoholName) {
    this.alcoholName = alcoholName;
  }
  public float getDegree() {
    return degree;
  }
  public void setDegree(float degree) {
    this.degree = degree;
  }
  public String getBrand() {
    return brand;
  }
  public void setBrand(String brand) {
    this.brand = brand;
  }
  public String getOrigin() {
    return origin;
  }
  public void setOrigin(String origin) {
    this.origin = origin;
  }
  public int getVolume() {
    return volume;
  }
  public void setVolume(int volume) {
    this.volume = volume;
  }
  public String getCharacteristic() {
    return characteristic;
  }
  public void setCharacteristic(String characteristic) {
    this.characteristic = characteristic;
  }
  public String getImg() {
    return img;
  }
  public void setImg(String img) {
    this.img = img;
  }
  public List<Store> getStores() {
    return stores;
  }
  public void setStores(List<Store> stores) {
    this.stores = stores;
  }
  public List<StoreImg> getStoreImgs() {
    return storeImgs;
  }
  public void setStoreImgs(List<StoreImg> storeImgs) {
    this.storeImgs = storeImgs;
  }
  public List<AlcoholSales> getAlcoholSales() {
    return alcoholSales;
  }
  public void setAlcoholSales(List<AlcoholSales> alcoholSales) {
    this.alcoholSales = alcoholSales;
  }
  @Override
  public String toString() {
    return "AlcoholDetail [writer=" + writer + ", alcoholDetailNo=" + alcoholDetailNo
        + ", alcoholTypeNo=" + alcoholTypeNo + ", alcoholName=" + alcoholName + ", degree=" + degree
        + ", brand=" + brand + ", origin=" + origin + ", volume=" + volume + ", characteristic="
        + characteristic + ", img=" + img + ", stores=" + stores + ", storeImgs=" + storeImgs
        + ", alcoholSales=" + alcoholSales + "]";
  }


}
