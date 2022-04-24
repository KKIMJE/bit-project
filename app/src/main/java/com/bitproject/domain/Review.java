package com.bitproject.domain;

import java.util.List;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Review {

  int reservationNo;
  int storeNo;
  String contents;
  List<ReviewImg> reviewImgs;
  List<Member> member;
  float score;
  String commentContents;
  java.sql.Timestamp regDate;
  java.sql.Timestamp commentRegDate;

}
