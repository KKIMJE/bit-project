package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bitproject.dao.PartyDao;
import com.bitproject.domain.Party;
import com.bitproject.service.PartyService;

@Service // Spring IoC 컨테이너가 객체를 만들어 저장할 때 클래스 이름을 사용한다. 예) defaultBoardService
public class DefaultPartyService implements PartyService {

  @Autowired
  PartyDao partyDao;

  /*@Transactional*/
  @Override
  public int add(Party party) {
    return partyDao.insert(party);
  }

  @Override
  public List<Party> list() {
    return partyDao.findAll();
  }

  @Override
  public Party get(int no) {
    Party party = partyDao.findByNo(no);
    return party;
  }

  @Override
  @Transactional
  public int update(Party party) {
    return partyDao.update(party);
  }

  @Override
  @Transactional
  public int delete(int no) {
    return partyDao.delete(no);
  }


}
