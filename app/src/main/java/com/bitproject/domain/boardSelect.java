package com.bitproject.domain;

public class boardSelect{

  int mNo;
  int boardNo;

  @Override
  public String toString() {
    return "boardSelect [mNo=" + mNo + ", boardNo=" + boardNo + "]";
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


}