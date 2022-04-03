package com.bitproject.domain;

import java.sql.Date;
import java.sql.Timestamp;
import lombok.Data;

@Data
public class Party {
  int partyNo;
  Member writer;
  Store store;
  String title;
  String contents;
  int partyFee;
  Date meetingDate;
  int maxMember;
  String alcoholType;
  String alcoholLimit;
  Timestamp regDate;
  Timestamp updateDate;
}






















