package com.bitproject.domain;

public class PartyCommentLike{

  int partyCommentNo;
  int mNo;

  @Override
  public String toString() {
    return "PartyCommentLike [partyCommentNo=" + partyCommentNo + ", mNo=" + mNo + "]";
  }


  public int getPartyCommentNo() {
    return partyCommentNo;
  }
  public void setPartyCommentNo(int partyCommentNo) {
    this.partyCommentNo = partyCommentNo;
  }
  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
  }



}