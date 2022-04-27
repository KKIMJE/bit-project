package com.bitproject.controller;

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
}
