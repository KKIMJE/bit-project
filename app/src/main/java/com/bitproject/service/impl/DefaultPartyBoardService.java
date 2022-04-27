package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bitproject.dao.PartyBoardDao;
import com.bitproject.domain.PartyBoard;
import com.bitproject.service.PartyBoardService;

@Service
public class DefaultPartyBoardService implements PartyBoardService {

  @Autowired
  PartyBoardDao partyBoardDao;

  @Override
  public int add(PartyBoard partyBoard) {
    return partyBoardDao.insert(partyBoard);
  }

  @Override
  public List<PartyBoard> get(int no) {
    List<PartyBoard> partyBoard = partyBoardDao.findByNo(no);

    return partyBoard;
  }

}
