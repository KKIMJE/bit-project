package com.bitproject.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bitproject.dao.ReportDao;
import com.bitproject.domain.Report;
import com.bitproject.service.ReportService;

@Service 
public class DefaultReportService implements ReportService {

  @Autowired
  ReportDao reportDao;

  @Override
  public int add(Report report) {
    return reportDao.insert(report);
  }
}
