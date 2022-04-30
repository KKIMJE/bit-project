package com.bitproject.domain;

import java.sql.Timestamp;
import lombok.Data;


@Data
public class Report {
  String title;
  int repoNo;
  int mno;
  int targetNo;
  String type;
  Timestamp date;
  String contents;
  boolean status;

}
