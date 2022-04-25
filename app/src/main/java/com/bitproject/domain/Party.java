package com.bitproject.domain;

import java.sql.Timestamp;
import java.util.List;
import lombok.experimental.Accessors;

@Accessors(chain = true)
public class Party {
  int partyNo;
  Member writer;
  String title;
  String contents;
  String partyFee;
  String meetingDate;
  String maxMember;
  String alcoholType;
  String alcoholLimit;
  Timestamp regDate;
  Timestamp updateDate;
  String address;
  int storeNo;
  List<PartyComment> partyComments;

  public int getPartyNo() {
    return partyNo;
  }
  public void setPartyNo(int partyNo) {
    this.partyNo = partyNo;
  }
  public Member getWriter() {
    return writer;
  }
  public void setWriter(Member writer) {
    this.writer = writer;
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
  public String getPartyFee() {
    return partyFee;
  }
  public void setPartyFee(String partyFee) {
    this.partyFee = partyFee;
  }
  public String getMeetingDate() {
    return meetingDate;
  }
  public void setMeetingDate(String meetingDate) {
    this.meetingDate = meetingDate;
  }
  public String getMaxMember() {
    return maxMember;
  }
  public void setMaxMember(String maxMember) {
    this.maxMember = maxMember;
  }
  public String getAlcoholType() {
    return alcoholType;
  }
  public void setAlcoholType(String alcoholType) {
    this.alcoholType = alcoholType;
  }
  public String getAlcoholLimit() {
    return alcoholLimit;
  }
  public void setAlcoholLimit(String alcoholLimit) {
    this.alcoholLimit = alcoholLimit;
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
  public String getAddress() {
    return address;
  }
  public void setAddress(String address) {
    this.address = address;
  }
  public int getStoreNo() {
    return storeNo;
  }
  public void setStoreNo(int storeNo) {
    this.storeNo = storeNo;
  }
  public List<PartyComment> getPartyComments() {
    return partyComments;
  }
  public void setPartyComments(List<PartyComment> partyComments) {
    this.partyComments = partyComments;
  }
  @Override
  public String toString() {
    return "Party [partyNo=" + partyNo + ", writer=" + writer + ", title=" + title + ", contents="
        + contents + ", partyFee=" + partyFee + ", meetingDate=" + meetingDate + ", maxMember="
        + maxMember + ", alcoholType=" + alcoholType + ", alcoholLimit=" + alcoholLimit
        + ", regDate=" + regDate + ", updateDate=" + updateDate + ", address=" + address
        + ", storeNo=" + storeNo + ", partyComments=" + partyComments + "]";
  }




}






















