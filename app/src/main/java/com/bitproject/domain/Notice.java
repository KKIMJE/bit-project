package com.bitproject.domain;

import lombok.Data;

@Data
public class Notice {

  int noticeNo;
  String title;
  String contents;
  java.sql.Timestamp regDate;
  int viewCount;

}
