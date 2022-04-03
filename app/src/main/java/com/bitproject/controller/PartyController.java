package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.FAIL;
import static com.bitproject.controller.ResultMap.SUCCESS;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Member;
import com.bitproject.domain.Party;
import com.bitproject.service.PartyService;

@RestController 
public class PartyController {

  @Autowired
  PartyService partyService;

  @RequestMapping("/party/list")
  public Object list() {
    return partyService.list();
  }

  @RequestMapping("/party/add")
  public Object add(Party party, HttpSession session) {
    Member member = (Member) session.getAttribute("loginUser");
    if (member == null) {
      return new ResultMap().setStatus(FAIL).setData("로그인 하지 않았습니다.");
    }

    party.setWriter(member);
    partyService.add(party);
    return new ResultMap().setStatus(SUCCESS);
  }


  @RequestMapping("/party/get")
  public Object get(int no) {
    Party party = partyService.get(no);
    if (party == null) {
      return "";
    }
    return party;
  }

  @RequestMapping("/party/update")
  public Object update(Party party, HttpSession session) {
    Member member = (Member) session.getAttribute("loginUser");
    if (member == null) {
      return new ResultMap().setStatus(FAIL).setData("로그인 하지 않았습니다.");
    }

    party.setWriter(member);
    int count = partyService.update(party);

    if (count == 1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("모임 번호가 유효하지 않거나 모임 개설자가 아닙니다.");
    }
  }

  @RequestMapping("/party/delete")
  public Object delete(int no, HttpSession session) {
    Member member = (Member) session.getAttribute("loginUser");
    if (member == null) {
      return new ResultMap().setStatus(FAIL).setData("로그인 하지 않았습니다.");
    }

    Party party = new Party();
    party.setPartyNo(no);
    party.setWriter(member);

    int count = partyService.delete(party);

    if (count == 1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("모임 번호가 유효하지 않거나 모임 개설자가 아닙니다.");
    }
  }
}
