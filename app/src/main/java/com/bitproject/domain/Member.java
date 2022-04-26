package com.bitproject.domain;

import java.sql.Timestamp;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Member {
  int mno;
  String email;
  String password;
  String name;
  String tel;
  Timestamp joinDate;
  boolean socialAccept;
  boolean gender;
  int birth;
  String selfIntroduction;
  String mImg;
  String nickName;
  float score;
  int blockAccept;
  String memberStatus;



  }



