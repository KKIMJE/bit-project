package com.bitproject.domain;

public class PartyStoreEvalutation{

  int partyNo;
  int mNo;
  float score;

  @Override
  public String toString() {
    return "PartyStoreEvalutation [partyNo=" + partyNo + ", mNo=" + mNo + ", score=" + score + "]";
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
  public float getScore() {
    return score;
  }
  public void setScore(float score) {
    this.score = score;
  }



}

