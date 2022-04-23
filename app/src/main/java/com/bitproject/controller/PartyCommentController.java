package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.service.PartyCommentService;

@RestController
@RequestMapping("/partyComment")
public class PartyCommentController {


  @Autowired
  PartyCommentService partyCommentService;

  @GetMapping("/list")
  public Object list() {
    return partyCommentService.list();
  }

  /*@Transactional*/
  /*@PostMapping("/add")
  public Object add(PartyComment partyComment, HttpSession session) {


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
