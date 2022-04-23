package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.PartyComment;

public interface PartyCommentService {

  int add(PartyComment partyComment);

  List<PartyComment> list();

  PartyComment get(int no);

  int update(PartyComment partyComment);

  int delete(int no);
}
