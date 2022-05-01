package com.bitproject.domain;

import lombok.experimental.Accessors;

public class PartyParticipant{

  @Accessors(chain = true)
  Party preParty;
  Member preParticipants;
  char participantStatus;

  public Party getPreParty() {
    return preParty;
  }
  public void setPreParty(Party preParty) {
    this.preParty = preParty;
  }
  public Member getPreParticipants() {
    return preParticipants;
  }
  public void setPreParticipants(Member preParticipants) {
    this.preParticipants = preParticipants;
  }
  public char getParticipantStatus() {
    return participantStatus;
  }
  public void setParticipantStatus(char c) {
    this.participantStatus = c;
  }

  @Override
  public String toString() {
    return "PartyParticipant [preParty=" + preParty + ", preParticipants=" + preParticipants
        + ", participantStatus=" + participantStatus + "]";
  }
}