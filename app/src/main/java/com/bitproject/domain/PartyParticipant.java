package com.bitproject.domain;

public class PartyParticipant{

  int partyNo;
  int mNo;
  String participantStatus;

  @Override
  public String toString() {
    return "PartyParticipant [partyNo=" + partyNo + ", mNo=" + mNo + ", participantStatus="
        + participantStatus + "]";
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
  public String getParticipantStatus() {
    return participantStatus;
  }
  public void setParticipantStatus(String participantStatus) {
    this.participantStatus = participantStatus;
  }


}