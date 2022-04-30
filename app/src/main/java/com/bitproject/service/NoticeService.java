package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.Notice;

public interface NoticeService {
  int size();

  List<Notice> list(int pageSize, int pageNo);

  int add(Notice notice);

  Notice get(int no);

  int delete(int no);
}
