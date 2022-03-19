package com.bitproject.domain;

import java.sql.Timestamp;

public class PartyBoard {
  int partyBoardNo;
  int partyNo;
  int mNo;
  Timestamp boardRegDate;
  String message;
  Timestamp messageTime;
  boolean messageStatus;

  @Override
  public String toString() {
    return "PartyBoard [partyBoardNo=" + partyBoardNo + ", partyNo=" + partyNo + ", mNo=" + mNo
        + ", boardRegDate=" + boardRegDate + ", message=" + message + ", messageTime=" + messageTime
        + ", messageStatus=" + messageStatus + "]";
  }


  public int getPartyBoardNo() {
    return partyBoardNo;
  }
  public void setPartyBoardNo(int partyBoardNo) {
    this.partyBoardNo = partyBoardNo;
  }
  public int getPartyNo() {
    return partyNo;
  }
  public void setPartyNo(int partyNo) {
    this.partyNo = partyNo;
  }
  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
  }
  public Timestamp getBoardRegDate() {
    return boardRegDate;
  }
  public void setBoardRegDate(Timestamp boardRegDate) {
    this.boardRegDate = boardRegDate;
  }
  public String getMessage() {
    return message;
  }
  public void setMessage(String message) {
    this.message = message;
  }
  public Timestamp getMessageTime() {
    return messageTime;
  }
  public void setMessageTime(Timestamp messageTime) {
    this.messageTime = messageTime;
  }
  public boolean isMessageStatus() {
    return messageStatus;
  }
  public void setMessageStatus(boolean messageStatus) {
    this.messageStatus = messageStatus;
  }





}
