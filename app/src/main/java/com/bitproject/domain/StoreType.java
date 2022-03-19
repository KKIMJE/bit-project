package com.bitproject.domain;

public class StoreType{

  int store_type_no;
  String type_name;

  @Override
  public String toString() {
    return "StoreType [store_type_no=" + store_type_no + ", type_name=" + type_name + "]";
  }


  public int getStore_type_no() {
    return store_type_no;
  }
  public void setStore_type_no(int store_type_no) {
    this.store_type_no = store_type_no;
  }
  public String getType_name() {
    return type_name;
  }
  public void setType_name(String type_name) {
    this.type_name = type_name;
  }

}