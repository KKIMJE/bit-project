package com.bitproject.domain;

public class PartyParticipant{

  Party preParty;
  Member participant;
  String participantStatus;

  public Party getPreParty() {
    return preParty;
  }
  public void setPreParty(Party preParty) {
    this.preParty = preParty;
  }
  public Member getParticipant() {
    return participant;
  }
  public void setParticipant(Member participant) {
    this.participant = participant;
  }
  public String getParticipantStatus() {
    return participantStatus;
  }
  public void setParticipantStatus(String participantStatus) {
    this.participantStatus = participantStatus;
  }
  @Override
  public String toString() {
    return "PartyParticipant [preParty=" + preParty + ", participant=" + participant
        + ", participantStatus=" + participantStatus + "]";
  }

}