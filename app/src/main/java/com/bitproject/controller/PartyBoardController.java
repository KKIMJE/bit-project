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

  @GetMapping("/get")
  public Object get(int pno) {
    //System.out.println("제발");

    return partyBoardService.get(pno);
  }


  @PostMapping("/add")
  public Object add(String message, int pno, HttpSession session) {
    System.out.println("호출되었다!");

    PartyBoard partyBoard = new PartyBoard();

    Member member = (Member) session.getAttribute("loginUser");

    //System.out.println(member);

    partyBoard.setSender(member);
    partyBoard.setMessage(message);
    partyBoard.setPartyNo(pno);

    // System.out.println(partyBoard);

    partyBoardService.add(partyBoard);
    return new ResultMap().setStatus(SUCCESS).setData(partyBoard);
  }
}
