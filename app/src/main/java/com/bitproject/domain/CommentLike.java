package com.bitproject.domain;

public class CommentLike{

  int mNo;
  int boardCommentNo;

  @Override
  public String toString() {
    return "CommentLike [mNo=" + mNo + ", boardCommentNo=" + boardCommentNo + "]";
  }


  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
  }
  public int getBoardCommentNo() {
    return boardCommentNo;
  }
  public void setBoardCommentNo(int boardCommentNo) {
    this.boardCommentNo = boardCommentNo;
  }


}