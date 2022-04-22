package com.bitproject.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CommunityForm{

  int boardNo;
  int mNo;
  int communityNo;
  String boardTitle;
  String boardImgs;
  String boardContents;
  java.sql.Timestamp regDate;
  java.sql.Timestamp updateDate;
  int viewCount;
  Member writer;
}