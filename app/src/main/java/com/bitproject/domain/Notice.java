package com.bitproject.domain;

public class Notice {

  int noticeNo;
  String memberType;
  String title;
  String contents;
  java.sql.Timestamp regDate;
  java.sql.Timestamp updateDate;
  int viewCount;

  @Override
  public String toString() {
    return "Notice [noticeNo=" + noticeNo + ", memberType=" + memberType + ", title=" + title
        + ", contents=" + contents + ", regDate=" + regDate + ", updateDate=" + updateDate
        + ", viewCount=" + viewCount + "]";
  }

  public int getNoticeNo() {
    return noticeNo;
  }
  public void setNoticeNo(int noticeNo) {
    this.noticeNo = noticeNo;
  }
  public String getMemberType() {
    return memberType;
  }
  public void setMemberType(String memberType) {
    this.memberType = memberType;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getContents() {
    return contents;
  }
  public void setContents(String contents) {
    this.contents = contents;
  }
  public java.sql.Timestamp getRegDate() {
    return regDate;
  }
  public void setRegDate(java.sql.Timestamp regDate) {
    this.regDate = regDate;
  }
  public java.sql.Timestamp getUpdateDate() {
    return updateDate;
  }
  public void setUpdateDate(java.sql.Timestamp updateDate) {
    this.updateDate = updateDate;
  }
  public int getViewCount() {
    return viewCount;
  }
  public void setViewCount(int viewCount) {
    this.viewCount = viewCount;
  }

}
