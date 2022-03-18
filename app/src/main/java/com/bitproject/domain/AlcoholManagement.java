package com.bitproject.domain;

public class Alcohol_management {
  int drinkNo;
  int mNo;
  java.sql.Date date;
  String amount; //'7병' 
  String type;
  String level; // '매우 취함' '적당히 취함' 
  
  
  @Override
  public String toString() {
    return "Alcmgmt [drinkNo=" + drinkNo + ", mNo=" + mNo + ", date=" + date + ", amount=" + amount
        + ", type=" + type + ", level=" + level + "]";
  }
  
  public int getDrinkNo() {
    return drinkNo;
  }
  public void setDrinkNo(int drinkNo) {
    this.drinkNo = drinkNo;
  }
  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
  }
  public java.sql.Date getDate() {
    return date;
  }
  public void setDate(java.sql.Date date) {
    this.date = date;
  }
  public String getAmount() {
    return amount;
  }
  public void setAmount(String amount) {
    this.amount = amount;
  }
  public String getType() {
    return type;
  }
  public void setType(String type) {
    this.type = type;
  }
  public String getLevel() {
    return level;
  }
  public void setLevel(String level) {
    this.level = level;
  }
}
