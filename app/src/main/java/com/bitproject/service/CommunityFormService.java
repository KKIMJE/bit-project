package com.bitproject.service;

import java.util.List;
import com.bitproject.domain.CommunityForm;

public interface CommunityFormService {

  int add(CommunityForm communityForm);

  List<CommunityForm> list();

  CommunityForm get(int no);

  int update(CommunityForm communityForm);

  int delete(int no);
}
