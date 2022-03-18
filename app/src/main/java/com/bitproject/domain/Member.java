package com.bitproject.domain;

import java.sql.Timestamp;

public class Member {
  int mno;
  String email;
  String pwd;
  String name;
  String tel;
  Timestamp joinDate;
  boolean socialAccept;
  boolean gender;
  int birth;
  String selfIntroduction;
  String mImg;
  String nickName;
  float score;
  Timestamp blockDate;
  boolean blockAccept;
  String memberStatus;


  @Override
  public String toString() {
    return "Member [mno=" + mno + ", email=" + email + ", pwd=" + pwd + ", name=" + name + ", tel="
        + tel + ", joinDate=" + joinDate + ", socialAccept=" + socialAccept + ", gender=" + gender
        + ", birth=" + birth + ", selfIntroduction=" + selfIntroduction + ", mImg=" + mImg
        + ", nickName=" + nickName + ", score=" + score + ", blockDate=" + blockDate
        + ", blockAccept=" + blockAccept + ", memberStatus=" + memberStatus + "]";
  }
  public int getMno() {
    return mno;
  }
  public void setMno(int mno) {
    this.mno = mno;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getPwd() {
    return pwd;
  }
  public void setPwd(String pwd) {
    this.pwd = pwd;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getTel() {
    return tel;
  }
  public void setTel(String tel) {
    this.tel = tel;
  }
  public Timestamp getJoinDate() {
    return joinDate;
  }
  public void setJoinDate(Timestamp joinDate) {
    this.joinDate = joinDate;
  }
  public boolean isSocialAccept() {
    return socialAccept;
  }
  public void setSocialAccept(boolean socialAccept) {
    this.socialAccept = socialAccept;
  }
  public boolean isGender() {
    return gender;
  }
  public void setGender(boolean gender) {
    this.gender = gender;
  }
  public int getBirth() {
    return birth;
  }
  public void setBirth(int birth) {
    this.birth = birth;
  }
  public String getSelfIntroduction() {
    return selfIntroduction;
  }
  public void setSelfIntroduction(String selfIntroduction) {
    this.selfIntroduction = selfIntroduction;
  }
  public String getmImg() {
    return mImg;
  }
  public void setmImg(String mImg) {
    this.mImg = mImg;
  }
  public String getNickName() {
    return nickName;
  }
  public void setNickName(String nickName) {
    this.nickName = nickName;
  }
  public float getScore() {
    return score;
  }
  public void setScore(float score) {
    this.score = score;
  }
  public Timestamp getBlockDate() {
    return blockDate;
  }
  public void setBlockDate(Timestamp blockDate) {
    this.blockDate = blockDate;
  }
  public boolean isBlockAccept() {
    return blockAccept;
  }
  public void setBlockAccept(boolean blockAccept) {
    this.blockAccept = blockAccept;
  }
  public String getMemberStatus() {
    return memberStatus;
  }
  public void setMemberStatus(String memberStatus) {
    this.memberStatus = memberStatus;
  }





}
