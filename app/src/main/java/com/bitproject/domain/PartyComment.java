package com.bitproject.domain;

import java.sql.Timestamp;

public class PartyComment{

  int partyCommentNo;
  int mno;
  String nickName;
  String mImg;
  int partyNo;
  String partyCommentContents;
  Timestamp commentDate;
  Timestamp updateDate;

  public int getPartyCommentNo() {
    return partyCommentNo;
  }
  public void setPartyCommentNo(int partyCommentNo) {
    this.partyCommentNo = partyCommentNo;
  }
  public int getmno() {
    return mno;
  }
  public void setmNo(int mno) {
    this.mno = mno;
  }
  public String getNickName() {
    return nickName;
  }
  public void setNickName(String nickName) {
    this.nickName = nickName;
  }
  public String getmImg() {
    return mImg;
  }
  public void setmImg(String mImg) {
    this.mImg = mImg;
  }
  public int getPartyNo() {
    return partyNo;
  }
  public void setPartyNo(int partyNo) {
    this.partyNo = partyNo;
  }
  public String getPartyCommentContents() {
    return partyCommentContents;
  }
  public void setPartyCommentContents(String partyCommentContents) {
    this.partyCommentContents = partyCommentContents;
  }
  public Timestamp getCommentDate() {
    return commentDate;
  }
  public void setCommentDate(Timestamp commentDate) {
    this.commentDate = commentDate;
  }
  public Timestamp getUpdateDate() {
    return updateDate;
  }
  public void setUpdateDate(Timestamp updateDate) {
    this.updateDate = updateDate;
  }

  @Override
  public String toString() {
    return "PartyComment [partyCommentNo=" + partyCommentNo + ", mno=" + mno + ", nickName="
        + nickName + ", mImg=" + mImg + ", partyNo=" + partyNo + ", partyCommentContents="
        + partyCommentContents + ", commentDate=" + commentDate + ", updateDate=" + updateDate
        + "]";
  }
}