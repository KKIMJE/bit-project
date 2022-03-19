package com.bitproject.domain;

import java.sql.Timestamp;

public class OwnerMember{

  int storeNo;
  int mNo;
  String img;
  String nickname;
  Timestamp regDate;
  Timestamp updateDate;

  @Override
  public String toString() {
    return "OwnerMember [storeNo=" + storeNo + ", mNo=" + mNo + ", img=" + img + ", nickname="
        + nickname + ", regDate=" + regDate + ", updateDate=" + updateDate + "]";
  }

  public int getStoreNo() {
    return storeNo;
  }
  public void setStoreNo(int storeNo) {
    this.storeNo = storeNo;
  }
  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
  }
  public String getImg() {
    return img;
  }
  public void setImg(String img) {
    this.img = img;
  }
  public String getNickname() {
    return nickname;
  }
  public void setNickname(String nickname) {
    this.nickname = nickname;
  }
  public Timestamp getRegDate() {
    return regDate;
  }
  public void setRegDate(Timestamp regDate) {
    this.regDate = regDate;
  }
  public Timestamp getUpdateDate() {
    return updateDate;
  }
  public void setUpdateDate(Timestamp updateDate) {
    this.updateDate = updateDate;
  }


}