package com.bitproject.domain;

public class Inquiry {

  int inqNo;
  int mNo;
  String type;
  String title;
  String contents;
  String attachFile;
  String answer;
  java.sql.Timestamp answerDate;
  java.sql.Timestamp date;


  @Override
  public String toString() {
    return "Inquiry [inqNo=" + inqNo + ", mNo=" + mNo + ", type=" + type + ", title=" + title
        + ", contents=" + contents + ", attachFile=" + attachFile + ", answer=" + answer
        + ", answerDate=" + answerDate + ", date=" + date + "]";
  }


  public int getInqNo() {
    return inqNo;
  }


  public void setInqNo(int inqNo) {
    this.inqNo = inqNo;
  }


  public int getmNo() {
    return mNo;
  }


  public void setmNo(int mNo) {
    this.mNo = mNo;
  }


  public String getType() {
    return type;
  }


  public void setType(String type) {
    this.type = type;
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


  public String getAttachFile() {
    return attachFile;
  }


  public void setAttachFile(String attachFile) {
    this.attachFile = attachFile;
  }


  public String getAnswer() {
    return answer;
  }


  public void setAnswer(String answer) {
    this.answer = answer;
  }


  public java.sql.Timestamp getAnswerDate() {
    return answerDate;
  }


  public void setAnswerDate(java.sql.Timestamp answerDate) {
    this.answerDate = answerDate;
  }


  public java.sql.Timestamp getDate() {
    return date;
  }


  public void setDate(java.sql.Timestamp date) {
    this.date = date;
  }



}
