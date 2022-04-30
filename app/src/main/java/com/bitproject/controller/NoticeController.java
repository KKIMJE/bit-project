package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.FAIL;
import static com.bitproject.controller.ResultMap.SUCCESS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Notice;
import com.bitproject.service.NoticeService;

@RestController 
public class NoticeController {

  @Autowired
  NoticeService noticeService;

  @RequestMapping("/notice/size")
  public int size() {
    return noticeService.size();
  }

  @RequestMapping("/notice/list")
  public Object list(int pageSize, int pageNo) {
    return noticeService.list(pageSize, pageNo);
  }

  @RequestMapping("/notice/add")
  public Object add(Notice notice) {
    int count = noticeService.add(notice);
    if (count == 1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("게시글 작성자가 아닙니다.");
    }
  }


  @RequestMapping("/notice/get")
  public Object get(int no) {
    Notice notice = noticeService.get(no);
    if (notice == null) {
      return new ResultMap().setStatus(FAIL).setData("해당 번호의 데이터가 없습니다.");
    }
    return new ResultMap().setStatus(SUCCESS).setData(notice);
  }

  @RequestMapping("/notice/delete")
  public Object delete(int no) {
    int count = noticeService.delete(no);
    if (count == 1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("게시글 작성자가 아닙니다.");
    }
  }
}
