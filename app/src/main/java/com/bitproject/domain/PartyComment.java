package com.bitproject.domain;

import java.sql.Timestamp;
import lombok.Data;

@Data
public class PartyComment{

  int partyCommentNo;
  int mno;
  String mImg;
  int partyNo;
  String partyCommentContents;
  Timestamp commentDate;
  Timestamp updateDate;
}