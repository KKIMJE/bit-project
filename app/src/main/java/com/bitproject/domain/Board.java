package com.bitproject.domain;

public class Board {

  int boardNo;
  int mNo;
  int communityNo;
  String title;
  String contents;
  java.sql.Timestamp regDate;
  java.sql.Timestamp updateDate;
  int viewCount;


  @Override
  public String toString() {
    return "Board [boardNo=" + boardNo + ", mNo=" + mNo + ", communityNo=" + communityNo
        + ", title=" + title + ", contents=" + contents + ", regDate=" + regDate + ", updateDate="
        + updateDate + ", viewCount=" + viewCount + "]";
  }

  public int getBoardNo() {
    return boardNo;
  }
  public void setBoardNo(int boardNo) {
    this.boardNo = boardNo;
  }
  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
  }
  public int getCommunityNo() {
    return communityNo;
  }
  public void setCommunityNo(int communityNo) {
    this.communityNo = communityNo;
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
