package com.bitproject.domain;

import java.sql.Timestamp;

public class Report {

  int repoNo;
  int mNo;
  String targetNo;
  String type;
  String contents;
  Timestamp date;
  boolean status;

  @Override
  public String toString() {
    return "Report [repoNo=" + repoNo + ", mNo=" + mNo + ", targetNo=" + targetNo + ", type=" + type
        + ", contents=" + contents + ", date=" + date + ", status=" + status + "]";
  }


  public int getRepoNo() {
    return repoNo;
  }
  public void setRepoNo(int repoNo) {
    this.repoNo = repoNo;
  }
  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
  }
  public String getTargetNo() {
    return targetNo;
  }
  public void setTargetNo(String targetNo) {
    this.targetNo = targetNo;
  }
  public String getType() {
    return type;
  }
  public void setType(String type) {
    this.type = type;
  }
  public String getContents() {
    return contents;
  }
  public void setContents(String contents) {
    this.contents = contents;
  }
  public java.sql.Timestamp getDate() {
    return date;
  }
  public void setDate(java.sql.Timestamp date) {
    this.date = date;
  }
  public boolean isStatus() {
    return status;
  }
  public void setStatus(boolean status) {
    this.status = status;
  }


}
