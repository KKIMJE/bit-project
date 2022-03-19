package com.bitproject.domain;

public class Community{

  int communityNo;
  String title;

  @Override
  public String toString() {
    return "Community [communityNo=" + communityNo + ", title=" + title + "]";
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

}