package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.FAIL;
import static com.bitproject.controller.ResultMap.SUCCESS;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Member;
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

  /*@Transactional*/
  @PostMapping("/add")
  public Object add(Party party, HttpSession session) {

    Member member = (Member) session.getAttribute("loginUser");
    party.setNickName(member.getNickName());
    party.setMno(member.getMno());
    System.out.println(party);

    partyService.add(party);
    return new ResultMap().setStatus(SUCCESS);
  }

  @GetMapping("/get")
  public Object get(int no) {
    Party party = partyService.get(no);
    if (party == null) {
      return new ResultMap().setStatus(FAIL).setData("해당 번호의 게시글이 없습니다.");
    }
    return new ResultMap().setStatus(SUCCESS).setData(party);
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
