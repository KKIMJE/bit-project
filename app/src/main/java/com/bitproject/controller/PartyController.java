package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Party;
import com.bitproject.service.PartyService;

@RestController
@RequestMapping("/party")
public class PartyController {

  @Autowired
  PartyService partyService;

  @GetMapping("/list")
  public Object list() {
    return partyService.list();
  }

  @PostMapping("/add")
  public Object add(@RequestBody Party party) {
    return partyService.add(party);
  }


  @GetMapping("/get")
  public Object get(int no) {
    Party party = partyService.get(no);
    if (party == null) {
      return "";
    }
    return party;
  }

  @PostMapping("/update")
  public Object update(Party party) {
    return partyService.update(party);
  }

  @DeleteMapping("/delete")
  public Object delete(int no) {
    return partyService.delete(no);
  }
}
