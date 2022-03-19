package com.bitproject.domain;

public class Tag{

  int tagNo;
  String name;


  @Override
  public String toString() {
    return "Tag [tagNo=" + tagNo + ", name=" + name + "]";
  }


  public int getTagNo() {
    return tagNo;
  }
  public void setTagNo(int tagNo) {
    this.tagNo = tagNo;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }



}