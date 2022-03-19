package com.bitproject.domain;

public class ReviewImg{

  int reviewImgNo;
  int reservationNo;
  String img;

  @Override
  public String toString() {
    return "ReviewImg [reviewImgNo=" + reviewImgNo + ", reservationNo=" + reservationNo + ", img="
        + img + "]";
  }


  public int getReviewImgNo() {
    return reviewImgNo;
  }
  public void setReviewImgNo(int reviewImgNo) {
    this.reviewImgNo = reviewImgNo;
  }
  public int getReservationNo() {
    return reservationNo;
  }
  public void setReservationNo(int reservationNo) {
    this.reservationNo = reservationNo;
  }
  public String getImg() {
    return img;
  }
  public void setImg(String img) {
    this.img = img;
  }


}