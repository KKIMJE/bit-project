package com.bitproject.domain;

import java.sql.Date;
import java.sql.Timestamp;

public class Party {
  int partyNo;
  int mno;
  int storeNo;
  String title;
  String contents;
  int partyFee;
  Date meetingDate;
  int maxMember;
  String alcoholType;
  int alcoholLimit;
  int viewCount;
  Timestamp regDate;
  Timestamp updateDate;



  @Override
  public String toString() {
    return "Party [partyNo=" + partyNo + ", mno=" + mno + ", storeNo=" + storeNo + ", title="
        + title + ", contents=" + contents + ", partyFee=" + partyFee + ", meetingDate="
        + meetingDate + ", maxMember=" + maxMember + ", alcoholType=" + alcoholType
        + ", alcoholLimit=" + alcoholLimit + ", viewCount=" + viewCount + ", regDate=" + regDate
        + ", updateDate=" + updateDate + "]";
  }


  public int getPartyNo() {
    return partyNo;
  }
  public void setPartyNo(int partyNo) {
    this.partyNo = partyNo;
  }
  public int getMno() {
    return mno;
  }
  public void setMno(int mno) {
    this.mno = mno;
  }
  public int getStoreNo() {
    return storeNo;
  }
  public void setStoreNo(int storeNo) {
    this.storeNo = storeNo;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getContents() {
    return contents;
  }
  public void setContents(String contents) {
    this.contents = contents;
  }
  public int getPartyFee() {
    return partyFee;
  }
  public void setPartyFee(int partyFee) {
    this.partyFee = partyFee;
  }
  public Date getMeetingDate() {
    return meetingDate;
  }
  public void setMeetingDate(Date meetingDate) {
    this.meetingDate = meetingDate;
  }
  public int getMaxMember() {
    return maxMember;
  }
  public void setMaxMember(int maxMember) {
    this.maxMember = maxMember;
  }
  public String getAlcoholType() {
    return alcoholType;
  }
  public void setAlcoholType(String alcoholType) {
    this.alcoholType = alcoholType;
  }
  public int getAlcoholLimit() {
    return alcoholLimit;
  }
  public void setAlcoholLimit(int alcoholLimit) {
    this.alcoholLimit = alcoholLimit;
  }
  public int getViewCount() {
    return viewCount;
  }
  public void setViewCount(int viewCount) {
    this.viewCount = viewCount;
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
