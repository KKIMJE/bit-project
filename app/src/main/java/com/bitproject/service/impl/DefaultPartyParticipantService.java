//package com.bitproject.service.impl;
//
//import java.util.List;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//import com.bitproject.dao.PartyParticipantDao;
//import com.bitproject.domain.PartyParticipant;
//import com.bitproject.service.PartyParticipantService;
//
//@Service // Spring IoC 컨테이너가 객체를 만들어 저장할 때 클래스 이름을 사용한다. 예) defaultBoardService
//public class DefaultPartyParticipantService implements PartyParticipantService {
//
//  @Autowired
//  PartyParticipantDao partyParticipantDao;
//
//  /*@Transactional*/
//  @Override
//  public int add(PartyParticipant partyParticipant) {
//    return partyParticipantDao.insert(partyParticipant);
//  }
//
//  @Override
//  public List<PartyParticipant> list() {
//    return partyParticipantDao.findAll();
//  }
//
//  @Override
//  public PartyParticipant get(int no) {
//    PartyParticipant partyParticipant = partyParticipantDao.findByNo(no);
//    return partyParticipant;
//  }
//
//  @Override
//  @Transactional
//  public int update(PartyParticipant partyParticipant) {
//    return partyParticipantDao.update(partyParticipant);
//  }
//
//  @Override
//  public int delete(int no) {
//    return partyParticipantDao.delete(no);
//  }
//
//
//}
