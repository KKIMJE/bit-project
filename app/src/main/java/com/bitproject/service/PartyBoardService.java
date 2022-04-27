package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.PartyBoard;

public interface PartyBoardService {

  List<PartyBoard> list();

  int add(PartyBoard partyBoard);

}
