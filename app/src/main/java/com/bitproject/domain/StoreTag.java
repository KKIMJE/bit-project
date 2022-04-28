package com.bitproject.domain;

import java.util.List;

public class StoreTag{

  int tagNo;
  int storeNo;
  List<Tag> tags;



  @Override
  public String toString() {
    return "StoreTag [tagNo=" + tagNo + ", storeNo=" + storeNo + ", tags=" + tags + "]";
  }

  public int getTagNo() {
    return tagNo;
  }
  public void setTagNo(int tagNo) {
    this.tagNo = tagNo;
  }
  public int getStoreNo() {
    return storeNo;
  }
  public void setStoreNo(int storeNo) {
    this.storeNo = storeNo;
  }
  public List<Tag> getTags() {
    return tags;
  }
  public void setTags(List<Tag> tags) {
    this.tags = tags;
  }



}