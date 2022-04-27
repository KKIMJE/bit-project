package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.PartyBoard;

public interface PartyBoardService {

  int add(PartyBoard partyBoard);

  List<PartyBoard> get(int no);
}
