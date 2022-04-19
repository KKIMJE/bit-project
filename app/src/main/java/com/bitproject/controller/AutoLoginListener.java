package com.bitproject.controller;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import com.bitproject.domain.Member;

@WebListener
public class AutoLoginListener implements ServletRequestListener {
  @Override
  public void requestInitialized(ServletRequestEvent sre) {
    System.out.println("AutoLoginListener.requestInitialized() 호출됨!");
    Member loginUser = new Member();
    loginUser.setMno(2);
    loginUser.setName("user2");

    HttpServletRequest httpRequest = (HttpServletRequest) sre.getServletRequest(); 
    HttpSession session = httpRequest.getSession();
    session.setAttribute("loginUser", loginUser);
  }
}
