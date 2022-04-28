package com.bitproject.domain;

import java.sql.Timestamp;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CommunityComment{

  int communityCommentNo;
  int commentWriter;
  int boardNo;
  String communityCommentContents;
  Timestamp commentDate;
  Timestamp updateDate;
  String name;

}
