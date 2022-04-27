package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.SUCCESS;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
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

  /*@GetMapping("/list")
  public Object list() {
    return partyBoardService.list();
  }*/


  // 우선 리턴타입 void로 바꾼거임
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



  /*@GetMapping("/get")
  public Object get(int no) {
    Party party = partyService.get(no);
    if (party == null) {
      return new ResultMap().setStatus(FAIL).setData("해당 모임의 게시글이 없습니다.");
    }
    return new ResultMap().setStatus(SUCCESS).setData(party);
  }*/
}
