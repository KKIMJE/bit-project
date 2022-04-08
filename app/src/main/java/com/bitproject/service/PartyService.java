package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.Party;

public interface PartyService {

  int add(Party party);

  List<Party> list();

  Party get(int no);

  int update(Party party);

  int delete(int no);
}
