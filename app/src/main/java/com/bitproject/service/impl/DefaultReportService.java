package com.bitproject.service.impl;

import java.util.List;
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

  @Override
  public int typeSize(String type) {
    return reportDao.countByType(type);
  }

  @Override
  public List<Report> typeList(String type, int pageSize, int pageNo) {
    return reportDao.findByType(type, pageSize, ((pageNo - 1) * pageSize));
  }

  @Override
  public List<Report> list(String type) {
    return reportDao.findAll(type);
  }

  @Override
  public Report get(int no) {
    return reportDao.findByNo(no);
  }

  @Override
  public int update(int no) {
    return reportDao.update(no);
  }
}
