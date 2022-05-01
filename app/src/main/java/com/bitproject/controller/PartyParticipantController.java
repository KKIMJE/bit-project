//package com.bitproject.controller;
//
//import static com.bitproject.controller.ResultMap.FAIL;
//import static com.bitproject.controller.ResultMap.SUCCESS;
//import javax.servlet.http.HttpSession;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import com.bitproject.domain.Member;
//import com.bitproject.domain.PartyParticipant;
//import com.bitproject.service.PartyParticipantService;
//
//@RestController
//@RequestMapping("/partyParticipant")
//public class PartyParticipantController {
//
//
//  @Autowired
//  PartyParticipantService partyParticipantService;
//
//  @GetMapping("/list")
//  public Object list() {
//    return partyParticipantService.list();
//  }
//
//  @PostMapping("/add")
//  public Object add(PartyParticipant partyParticipant, HttpSession session) {
//
//    Member member = (Member) session.getAttribute("loginUser");
//    //partyParticipant.setWriter(member);
//
//    partyParticipantService.add(partyParticipant);
//    return new ResultMap().setStatus(SUCCESS);
//  }
//
//  @GetMapping("/get")
//  public Object get(int no) {
//    PartyParticipant partyParticipant = partyParticipantService.get(no);
//    if (partyParticipant == null) {
//      return new ResultMap().setStatus(FAIL).setData("해당 모임의 게시글이 없습니다.");
//    }
//    return new ResultMap().setStatus(SUCCESS).setData(partyParticipant);
//  }
//
//  @PostMapping("/update")
//  public Object update(int no, PartyParticipant partyParticipant, HttpSession session) {
//    Member member = (Member) session.getAttribute("loginUser");
//    //partyParticipant.setPartytNo(no);
//    //party.setWriter(member);
//    int count = partyParticipantService.update(partyParticipant);
//
//    if (count == 1) {
//      return new ResultMap().setStatus(SUCCESS);
//    } else {
//      return new ResultMap().setStatus(FAIL).setData("모임 방장만이 게시글을 변경할 수 있습니다.");
//    }
//  }
//
//
//  @DeleteMapping("/delete")
//  public Object delete(int no) {
//
//    int count = partyParticipantService.delete(no);
//
//    if (count == 1) {
//      return new ResultMap().setStatus(SUCCESS);
//    } else {
//      return new ResultMap().setStatus(FAIL).setData("모임 방장만이 게시글을 삭제할 수 있습니다.");
//    }
//
//
//  }
//}
