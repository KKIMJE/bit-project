package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.CommunityComment;

public interface CommunityCommentService {

  int add(CommunityComment communityComment);

  List<CommunityComment> list();

  CommunityComment get(int no);

  //  CommunityComment getByBoardNo(int no);

  int update(CommunityComment communityComment);

  int delete(int no);
}
