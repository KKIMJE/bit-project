package com.bitproject.domain;

public class Review {

  int reservationNo;
  int storeNo;
  String contents;
  float score;
  String commentContents;
  java.sql.Timestamp regDate;
  java.sql.Timestamp commentRegDate;

  @Override
  public String toString() {
    return "Review [reservationNo=" + reservationNo + ", storeNo=" + storeNo + ", contents="
        + contents + ", score=" + score + ", commentContents=" + commentContents + ", regDate="
        + regDate + ", commentRegDate=" + commentRegDate + "]";
  }

  public int getReservationNo() {
    return reservationNo;
  }
  public void setReservationNo(int reservationNo) {
    this.reservationNo = reservationNo;
  }
  public int getStoreNo() {
    return storeNo;
  }
  public void setStoreNo(int storeNo) {
    this.storeNo = storeNo;
  }
  public String getContents() {
    return contents;
  }
  public void setContents(String contents) {
    this.contents = contents;
  }
  public float getScore() {
    return score;
  }
  public void setScore(float score) {
    this.score = score;
  }
  public String getCommentContents() {
    return commentContents;
  }
  public void setCommentContents(String commentContents) {
    this.commentContents = commentContents;
  }
  public java.sql.Timestamp getRegDate() {
    return regDate;
  }
  public void setRegDate(java.sql.Timestamp regDate) {
    this.regDate = regDate;
  }
  public java.sql.Timestamp getCommentRegDate() {
    return commentRegDate;
  }
  public void setCommentRegDate(java.sql.Timestamp commentRegDate) {
    this.commentRegDate = commentRegDate;
  }

}
