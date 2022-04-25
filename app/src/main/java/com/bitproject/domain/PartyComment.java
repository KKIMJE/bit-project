package com.bitproject.domain;

import java.sql.Timestamp;

public class PartyComment{

  int partyCommentNo;
  Member commentWriter;
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
  public Member getCommentWriter() {
    return commentWriter;
  }
  public void setCommentWriter(Member commentWriter) {
    this.commentWriter = commentWriter;
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
    return "PartyComment [partyCommentNo=" + partyCommentNo + ", commentWriter=" + commentWriter
        + ", partyNo=" + partyNo + ", partyCommentContents=" + partyCommentContents
        + ", commentDate=" + commentDate + ", updateDate=" + updateDate + "]";
  }
}