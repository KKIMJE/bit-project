package com.bitproject.domain;

public class Store {

  int storeNo;
  int businessRegistrationNo;
  String businessRegistration;
  String name;
  String address;
  String tel;
  java.sql.Time hour;
  String introduction;
  float evaluationScore;
  boolean reservationAccept;
  int maxMember;
  float lat;
  float lng;
  String placeId;
  boolean oper;
  boolean status;

  @Override
  public String toString() {
    return "Store [storeNo=" + storeNo + ", businessRegistrationNo=" + businessRegistrationNo
        + ", businessRegistration=" + businessRegistration + ", name=" + name + ", address="
        + address + ", tel=" + tel + ", hour=" + hour + ", introduction=" + introduction
        + ", evaluationScore=" + evaluationScore + ", reservationAccept=" + reservationAccept
        + ", maxMember=" + maxMember + ", lat=" + lat + ", lng=" + lng + ", placeId=" + placeId
        + ", oper=" + oper + ", status=" + status + "]";
  }

  public int getStoreNo() {
    return storeNo;
  }

  public void setStoreNo(int storeNo) {
    this.storeNo = storeNo;
  }

  public int getBusinessRegistrationNo() {
    return businessRegistrationNo;
  }

  public void setBusinessRegistrationNo(int businessRegistrationNo) {
    this.businessRegistrationNo = businessRegistrationNo;
  }

  public String getBusinessRegistration() {
    return businessRegistration;
  }

  public void setBusinessRegistration(String businessRegistration) {
    this.businessRegistration = businessRegistration;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getTel() {
    return tel;
  }

  public void setTel(String tel) {
    this.tel = tel;
  }

  public java.sql.Time getHour() {
    return hour;
  }

  public void setHour(java.sql.Time hour) {
    this.hour = hour;
  }

  public String getIntroduction() {
    return introduction;
  }

  public void setIntroduction(String introduction) {
    this.introduction = introduction;
  }

  public float getEvaluationScore() {
    return evaluationScore;
  }

  public void setEvaluationScore(float evaluationScore) {
    this.evaluationScore = evaluationScore;
  }

  public boolean isReservationAccept() {
    return reservationAccept;
  }

  public void setReservationAccept(boolean reservationAccept) {
    this.reservationAccept = reservationAccept;
  }

  public int getMaxMember() {
    return maxMember;
  }

  public void setMaxMember(int maxMember) {
    this.maxMember = maxMember;
  }

  public float getLat() {
    return lat;
  }

  public void setLat(float lat) {
    this.lat = lat;
  }

  public float getLng() {
    return lng;
  }

  public void setLng(float lng) {
    this.lng = lng;
  }

  public String getPlaceId() {
    return placeId;
  }

  public void setPlaceId(String placeId) {
    this.placeId = placeId;
  }

  public boolean isOper() {
    return oper;
  }

  public void setOper(boolean oper) {
    this.oper = oper;
  }

  public boolean isStatus() {
    return status;
  }

  public void setStatus(boolean status) {
    this.status = status;
  }


}