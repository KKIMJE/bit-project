package com.bitproject.service;

import java.util.List;
import javax.servlet.http.HttpSession;
import com.bitproject.domain.Member;

public interface AdminMemberService {

  List<Member> list();

  List<Member> pagelist(int pageSize, int pageNo);

  int size();

  int typeSize(boolean memberStatus);

  List<Member> get(String filt, String value);

  int delete(int no);

  int update(int no);

  public void logout(HttpSession session);

}
