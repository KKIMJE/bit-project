package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.FAIL;
import static com.bitproject.controller.ResultMap.SUCCESS;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Member;
import com.bitproject.domain.Report;
import com.bitproject.service.ReportService;

@RestController
@RequestMapping("/report")
public class ReportController {


  @Autowired
  ReportService reportService;

  @PostMapping("/add")
  public Object add(int no, String rtype, String rcontent, Report report, HttpSession session) {
    System.out.println("호출됐니?");

    Member member = (Member) session.getAttribute("loginUser");
    report.setMno(member.getMno());
    report.setTargetNo(no);
    report.setType(rtype);
    report.setContents(rcontent);
    reportService.add(report);
    return new ResultMap().setStatus(SUCCESS);
  }

  @RequestMapping("/typeSize")
  public int targetSize(String type) {
    return reportService.typeSize(type);
  }
  @RequestMapping("/list")
  public Object typeList(String type) {
    return reportService.list(type);
  }
  @RequestMapping("/typeList")
  public Object typeList(String type, int pageSize, int pageNo) {
    return reportService.typeList(type, pageSize, pageNo);
  }

  @RequestMapping("/get")
  public Object get(int no) {
    Report report= reportService.get(no);
    if (report == null) {
      return new ResultMap().setStatus(FAIL).setData("해당 번호의 데이터가 없습니다.");
    }
    return new ResultMap().setStatus(SUCCESS).setData(report);
  }

  @RequestMapping("/update")
  public Object update(int no) {
    int count = reportService.update(no);

    if(count != 0) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("관리자가 아니거나 유효하지 않은 번호입니다.");
    }
  }
}
