package com.bitproject.domain;

public class PartyParticipant{

  int partyNo;
  int mno;
  String participantStatus;

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
  public String getParticipantStatus() {
    return participantStatus;
  }
  public void setParticipantStatus(String participantStatus) {
    this.participantStatus = participantStatus;
  }

  @Override
  public String toString() {
    return "PartyParticipant [partyNo=" + partyNo + ", mno=" + mno + ", participantStatus="
        + participantStatus + "]";
  }
}