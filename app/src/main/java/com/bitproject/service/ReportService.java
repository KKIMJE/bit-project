package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.Report;

public interface ReportService {

  int add(Report report);

  int typeSize(String type);

  List<Report> list(String type);

  List<Report> typeList(String type, int pageSize, int pageNo);

  Report get(int no);

  int update(int no);
}
