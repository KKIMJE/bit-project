package com.bitproject.domain;

public class SnsAccount{

  int mNo;
  int snsNo;
  String email;

  @Override
  public String toString() {
    return "SnsAccount [mNo=" + mNo + ", snsNo=" + snsNo + ", email=" + email + "]";
  }


  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
  }
  public int getSnsNo() {
    return snsNo;
  }
  public void setSnsNo(int snsNo) {
    this.snsNo = snsNo;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }



}