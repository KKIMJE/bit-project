package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.PartyDao;
import com.bitproject.domain.Party;

@RestController 
public class PartyController {

  @Autowired
  PartyDao partyDao;

  @RequestMapping("/party/list")
  public Object list() {
    return partyDao.findAll();
  }

  @RequestMapping("/party/add")
  public Object add(Party party) {
    return partyDao.insert(party);
  }


  @RequestMapping("/party/get")
  public Object get(int no) {
    Party party = partyDao.findByNo(no);
    if (party == null) {
      return "";
    }
    partyDao.increaseViewCount(no);
    return party;
  }

  @RequestMapping("/party/update")
  public Object update(Party party) {
    return partyDao.update(party);
  }

  @RequestMapping("/party/delete")
  public Object delete(int no) {
    return partyDao.delete(no);
  }
}
