package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.FAIL;
import static com.bitproject.controller.ResultMap.SUCCESS;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Store;
import com.bitproject.service.AdminStoreService;

@RestController 
public class AdminStoreController {

  @Autowired
  AdminStoreService adminStoreService;


  @RequestMapping("/admin/store/size")
  public int size() {
    return adminStoreService.size();
  }

  @RequestMapping("/admin/store/list")
  public Object list() {
    return adminStoreService.list();
  }

  @RequestMapping("/admin/store/pagelist")
  public Object pagelist(int pageSize, int pageNo) {
    return adminStoreService.pagelist(pageSize, pageNo);
  }

  @RequestMapping("/admin/store/get")
  public List<Store> get(String  filt, String value) {
    List<Store> store = adminStoreService.get(filt, value);
    //    if (member == null) {
    //      return ;
    //    }
    return store;
  }

  @RequestMapping("/admin/store/update")
  public Object update(int no) {
    int count = adminStoreService.update(no);

    if(count ==1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("유효하지 않거나 게시글 작성자가 아닙니다.");
    }
  }

  @RequestMapping("/admin/store/delete")
  public Object delete(int no) {

    int count = adminStoreService.delete(no);

    if(count ==1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("이미 탈퇴한 회원입니다.");
    }
  }

}

