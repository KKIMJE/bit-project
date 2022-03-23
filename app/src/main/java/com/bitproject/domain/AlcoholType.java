package com.bitproject.domain;

public class AlcoholType {
  int no;
  String title;

  @Override
  public String toString() {
    return "AlcoholType [no=" + no + ", title=" + title + "]";
  }
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }

}
