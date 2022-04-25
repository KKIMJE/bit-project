package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.SUCCESS;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Member;
import com.bitproject.domain.PartyComment;
import com.bitproject.service.PartyCommentService;

@RestController
@RequestMapping("/partyComment")
public class PartyCommentController {


  @Autowired
  PartyCommentService partyCommentService;

  @PostMapping("/add")
  public Object add(PartyComment partyComment, HttpSession session) {
    Member member = (Member) session.getAttribute("loginUser");
    partyComment.setCommentWriter(member);

    partyCommentService.add(partyComment);
    return new ResultMap().setStatus(SUCCESS);
  }



  /*
  @GetMapping("/list")
  public Object list() {
    return partyCommentService.list();
  }

  @GetMapping("/get")
  public Object get(int no) {

  }

  @PostMapping("/update")
  public Object update(PartyComment partyComment) {
    return partyCommentService.update(PartyComment);
  }

  @DeleteMapping("/delete")
  public Object delete(int no) {
    return partyCommentService.delete(no);
  }*/
}
