package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.NoticeDao;
import com.bitproject.domain.Notice;

@RestController 
public class NoticeController {

  @Autowired
  NoticeDao noticeDao;

  @RequestMapping("/notice/list")
  public Object list() {
    return noticeDao.findAll();
  }

  @RequestMapping("/notice/add")
  public Object add(Notice notice) {
    return noticeDao.insert(notice);
  }


  @RequestMapping("/notice/get")
  public Object get(int no) {
    Notice notice = noticeDao.findByNo(no);
    if (notice == null) {
      return "";
    }
    noticeDao.increaseViewCount(no);
    return notice;
  }

  @RequestMapping("/notice/update")
  public Object update(Notice notice) {
    return noticeDao.update(notice);
  }

  @RequestMapping("/notice/delete")
  public Object delete(int no) {
    return noticeDao.delete(no);
  }
}
