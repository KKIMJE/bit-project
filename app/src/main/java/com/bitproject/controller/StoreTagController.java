package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.StoreTag;
import com.bitproject.service.StoreTagService;

@RestController 
public class StoreTagController {

  // @Autowired
  // - 필드 선언부에 이 애노테이션을 붙여서 표시해 두면, 
  //   Spring Boot가 InquiryController 객체를 만들 때 InquiryDao 구현체를 찾아 자동으로 주입한다. 
  //
  @Autowired
  StoreTagService storeTagService;

  // 리턴값 변경시 담당자에게 요청 필수
  @RequestMapping("/storeTag/list")
  public Object list() {
    return storeTagService.list();
  }

  @RequestMapping("/storeTag/add")
  public Object add(StoreTag storeTag) {
    return storeTagService.add(storeTag);
  }

  @RequestMapping("/storeTag/delete")
  public Object delete(int no) {
    return storeTagService.delete(no);
  }

  @RequestMapping("/storeTag/update")
  public Object update(StoreTag storetag) {
    return storeTagService.update(storetag);

  }
}
