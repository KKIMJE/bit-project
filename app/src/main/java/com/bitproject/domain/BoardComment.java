package com.bitproject.domain;

import java.sql.Timestamp;

public class BoardComment{

  int boardCommentNo;
  int mNo;
  int boardNo;
  String commentContents;
  Timestamp commentDate;
  Timestamp updateDate;


  @Override
  public String toString() {
    return "BoardComment [boardCommentNo=" + boardCommentNo + ", mNo=" + mNo + ", boardNo="
        + boardNo + ", commentContents=" + commentContents + ", commentDate=" + commentDate
        + ", updateDate=" + updateDate + "]";
  }


  public int getBoardCommentNo() {
    return boardCommentNo;
  }
  public void setBoardCommentNo(int boardCommentNo) {
    this.boardCommentNo = boardCommentNo;
  }
  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
  }
  public int getBoardNo() {
    return boardNo;
  }
  public void setBoardNo(int boardNo) {
    this.boardNo = boardNo;
  }
  public String getCommentContents() {
    return commentContents;
  }
  public void setCommentContents(String commentContents) {
    this.commentContents = commentContents;
  }
  public Timestamp getCommentDate() {
    return commentDate;
  }
  public void setCommentDate(Timestamp commentDate) {
    this.commentDate = commentDate;
  }
  public Timestamp getUpdateDate() {
    return updateDate;
  }
  public void setUpdateDate(Timestamp updateDate) {
    this.updateDate = updateDate;
  }




}