package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.SUCCESS;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Member;
import com.bitproject.domain.PartyBoard;
import com.bitproject.service.PartyBoardService;

@RestController
@RequestMapping("/partyBoard")
public class PartyBoardController {


  @Autowired
  PartyBoardService partyBoardService;

  @GetMapping("/list")
  public Object list() {
    return partyBoardService.list();
  }

  @PostMapping("/add")
  public Object add(PartyBoard partyBoard, HttpSession session) {

    Member member = (Member) session.getAttribute("loginUser");
    // partyBoard.setWriter(member);

    partyBoardService.add(partyBoard);
    return new ResultMap().setStatus(SUCCESS);
  }

  /*@GetMapping("/get")
  public Object get(int no) {
    Party party = partyService.get(no);
    if (party == null) {
      return new ResultMap().setStatus(FAIL).setData("해당 모임의 게시글이 없습니다.");
    }
    return new ResultMap().setStatus(SUCCESS).setData(party);
  }*/
}
