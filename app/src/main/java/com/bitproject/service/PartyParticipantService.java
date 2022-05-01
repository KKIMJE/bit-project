package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.PartyParticipant;

public interface PartyParticipantService {

  int add(PartyParticipant partyParticipant);

  List<PartyParticipant> list();

  PartyParticipant get(int no);

  int update(PartyParticipant partyParticipant);

  int delete(int no);
}
