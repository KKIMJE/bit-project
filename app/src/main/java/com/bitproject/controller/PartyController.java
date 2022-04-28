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

  @PostMapping("/add")
  public Object add(Party party, HttpSession session) {

    Member member = (Member) session.getAttribute("loginUser");
    party.setWriter(member);

    partyService.add(party);
    return new ResultMap().setStatus(SUCCESS);
  }

  @GetMapping("/get")
  public Object get(int no) {
    Party party = partyService.get(no);
    if (party == null) {
      return new ResultMap().setStatus(FAIL).setData("해당 모임의 게시글이 없습니다.");
    }
    return new ResultMap().setStatus(SUCCESS).setData(party);
  }

  @PostMapping("/update")
  public Object update(int no, Party party, HttpSession session) {
    Member member = (Member) session.getAttribute("loginUser");
    party.setPartyNo(no);
    party.setWriter(member);
    int count = partyService.update(party);

    if (count == 1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("모임 방장만이 게시글을 변경할 수 있습니다.");
    }
  }


  @DeleteMapping("/delete")
  public Object delete(int no) {

    int count = partyService.delete(no);

    if (count == 1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("모임 방장만이 게시글을 삭제할 수 있습니다.");
    }


  }
}
