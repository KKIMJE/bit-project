package com.bitproject.domain;

public class PartyBoardSelect{

  int PartyBoardNo;
  int mNo;

  @Override
  public String toString() {
    return "PartyBoardSelect [PartyBoardNo=" + PartyBoardNo + ", mNo=" + mNo + "]";
  }


  public int getPartyBoardNo() {
    return PartyBoardNo;
  }
  public void setPartyBoardNo(int partyBoardNo) {
    PartyBoardNo = partyBoardNo;
  }
  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
  }



}