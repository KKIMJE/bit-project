package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.CommunityMain;

public interface CommunityService {

  int add(CommunityMain communityMain);

  List<CommunityMain> list();

  CommunityMain get(int no);

  int update(CommunityMain communityMain);

  int delete(int no);
}
