package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.SUCCESS;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.CommunityFormDao;
import com.bitproject.domain.CommunityForm;
import com.bitproject.domain.Member;

@RestController
public class CommunityFormController {

  //log를 출력하는 도구 준비
  private static final Logger log = LoggerFactory.getLogger(CommunityFormController.class);

  @Autowired
  CommunityFormDao communityFormDao;

  @RequestMapping("/communityForm/list")
  public Object list() {
    return communityFormDao.findAll();
  }

  @RequestMapping("/communityForm/add")
  public Object add(CommunityForm communityForm, HttpSession session) {
    //    return communityFormDao.insert(communityForm);
    log.info("게시글 등록!"); // 운영자가 확인하기를 원하는 정보
    log.debug(communityForm.toString()); // 개발자가 확인하기를 원하는 정보

    Member member = (Member) session.getAttribute("loginUser");
    communityForm.setWriter(member);
    communityFormDao.insert(communityForm);
    return new ResultMap().setStatus(SUCCESS);
  }


  @RequestMapping("/communityForm/get")
  public Object get(int no) {
    CommunityForm communityForm = communityFormDao.findByNo(no);
    if (communityForm == null) {
      return "";
    }
    return communityForm;
  }

  @RequestMapping("communityForm/update")
  public Object update(CommunityForm communityForm){
    return communityFormDao.update(communityForm);
  }

  @RequestMapping("communityForm/delete")
  public Object delete(int no) {
    return communityFormDao.delete(no);
  }
}
