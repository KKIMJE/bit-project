package com.bitproject.domain;

import java.sql.Date;
import java.sql.Timestamp;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Party {
  int partyNo;
  String name;
  String mImg;
  String title;
  String contents;
  int partyFee;
  Date meetingDate;
  int maxMember;
  String alcoholType;
  String alcoholLimit;
  Timestamp regDate;
  Timestamp updateDate;
  String address;
  int storeNo;
}






















