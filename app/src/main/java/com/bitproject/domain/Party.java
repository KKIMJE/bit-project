package com.bitproject.domain;

import java.sql.Date;
import java.sql.Timestamp;
import lombok.Data;

@Data
public class Party {
  int partyNo;
  Member writer;
  Store store;
  String title;
  String contents;
  int partyFee;
  Date meetingDate;
  int maxMember;
  String alcoholType;
  String alcoholLimit;
  int viewCount;
  Timestamp regDate;
  Timestamp updateDate;

}


/*   
    <result column="mno" property="mNo"/>
    <result column="store_no" property="storeNo"/>
    <result column="title" property="title"/>
    <result column="contents" property="contents"/>
    <result column="party_fee" property="party_fee"/>
    <result column="meeting_date" property="meeting_date"/>
    <result column="max_member" property="max_member"/>
    <result column="alcohol_type" property="alcohol_type"/>
    <result column="alcohol_limit" property="communityNo"/>
    <result column="view_count" property="viewCount"/>
    <result column="reg_date" property="regDate"/>
    <result column="update_date" property="updateDate"/>

 */






















