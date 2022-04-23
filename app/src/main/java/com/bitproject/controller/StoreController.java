package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.FAIL;
import static com.bitproject.controller.ResultMap.SUCCESS;
import java.util.List;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.Store;
import com.bitproject.service.StoreService;

@RestController
@RequestMapping("/store")
public class StoreController {

  @Autowired
  StoreService storeService;

  //  @Autowired
  //  StoreDao storeDao;
  //

  @RequestMapping("/list")
  public Object list() {     
    return storeService.list();
  }

  @RequestMapping("/add")
  public Object add(Store store) {
    System.out.println("store: " + store);
    return storeService.add(store);
  }


  @RequestMapping("/get")
  public Object get(int no) {
   Store store = storeService.get(no);
    if (store == null) {
      return new ResultMap().setStatus(FAIL).setData("해당 번호의 게시글이 없습니다.");
    }
    return new ResultMap().setStatus(SUCCESS).setData(store);
  }
  
  @RequestMapping("/getMnoCnt")
  public int getMnoCnt(int no) {
    //System.out.println("StoreNo: " + no + ", Get Store: " + store);
    return storeService.getCountMno(no);
  }

  @RequestMapping("/getStoreAlc")
  public List<Store> getStoreAlc(int no) {
    //System.out.println("StoreNo: " + no + ", Get Store: " + store);
    return storeService.findByStoreAlc(no);
  }

  @PostMapping("/update")
  public Object update(Store store, HttpSession session) {
    Store loginmember = (Store) session.getAttribute("loginUser");
    store.setStoreNo(loginmember.getStoreNo());
   int count = storeService.update(store);
    
    if(count ==1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("유효하지 않거나 게시글 작성자가 아닙니다.");
    }
  }

  @RequestMapping("/delete")
  public int delete(int no) {
    //System.out.println("Delete: " + no);
    int row_num = storeService.delete(no);
    //System.out.println("After Update: " + row_num);
    return row_num;
    // return storeService.delete(no);
  }

  //  @RequestMapping("/store/error")
  //  public error(Store no) {
  //    return storeService.error(no);
  //  }


}