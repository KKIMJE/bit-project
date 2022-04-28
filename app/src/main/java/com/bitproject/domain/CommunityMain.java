package com.bitproject.domain;

import java.util.List;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CommunityMain{

  int boardNo;
  int mno;
  int communityNo;
  String boardTitle;
  String boardImgs;
  String boardContents;
  java.sql.Timestamp regDate;
  int boardLike;
  int boardCommentCount;
  String name;
  int viewCount;
  List<CommunityComment> communityComments;
}