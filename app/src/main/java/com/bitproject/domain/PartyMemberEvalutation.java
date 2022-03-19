package com.bitproject.domain;

public class PartyMemberEvalutation{

  int boardCommentNo;
  int mNo;
  int boardNo;
  float score;

  @Override
  public String toString() {
    return "PartyMemberEvalutation [boardCommentNo=" + boardCommentNo + ", mNo=" + mNo
        + ", boardNo=" + boardNo + ", score=" + score + "]";
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
  public float getScore() {
    return score;
  }
  public void setScore(float score) {
    this.score = score;
  }



}