package com.bitproject.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bitproject.dao.NoticeDao;
import com.bitproject.domain.Notice;
import com.bitproject.service.NoticeService;

@Service
public class DefaultNoticeService implements NoticeService {

  @Autowired
  NoticeDao noticeDao;

  @Override
  public int size() {
    // TODO Auto-generated method stub
    return noticeDao.countAll();
  }

  @Override
  public List<Notice> list(int pageSize, int pageNo) {
    return noticeDao.findAll(pageSize, ((pageNo - 1) * pageSize));
  }

  @Override
  @Transactional
  public int add(Notice notice) {
    return noticeDao.insert(notice);
  }

  @Override
  public Notice get(int no) {
    Notice notice = noticeDao.findByNo(no);
    if (notice != null) {
      noticeDao.increaseViewCount(no);
    }
    return notice;
  }

  @Override
  public int delete(int no) {
    return noticeDao.delete(no);
  }


}
