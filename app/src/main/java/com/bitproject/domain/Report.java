package com.bitproject.domain;

import java.sql.Timestamp;

public class Report {

  int repoNo;
  int mno;
  int targetNo;
  String type;
  Timestamp date;
  String contents;
  boolean status;


  public int getRepoNo() {
    return repoNo;
  }
  public void setRepoNo(int repoNo) {
    this.repoNo = repoNo;
  }
  public int getMno() {
    return mno;
  }
  public void setMno(int mno) {
    this.mno = mno;
  }
  public int getTargetNo() {
    return targetNo;
  }
  public void setTargetNo(int targetNo) {
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
  public Timestamp getDate() {
    return date;
  }
  public void setDate(Timestamp date) {
    this.date = date;
  }
  public boolean isStatus() {
    return status;
  }
  public void setStatus(boolean status) {
    this.status = status;
  }

  @Override
  public String toString() {
    return "Report [repoNo=" + repoNo + ", mno=" + mno + ", targetNo=" + targetNo + ", type=" + type
        + ", contents=" + contents + ", date=" + date + ", status=" + status + "]";
  }
}
