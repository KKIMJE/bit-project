package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.SUCCESS;
import java.io.File;
import java.io.FileInputStream;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.bitproject.domain.Store;
import com.bitproject.service.StoreService;

@RestController
@RequestMapping("/store")
public class StoreController {

  @Autowired
  StoreService storeService;

  //리턴값 변경시 담당자에게 요청 필수
  @RequestMapping("/list")
  public Object list() {     
    return new ResultMap().setStatus(SUCCESS).setData(storeService.list());
  }

  @RequestMapping("/add")
  public Object add(Store store, MultipartFile[] file) {
    System.out.println("store: " + store);
    storeService.add(store);
    return new ResultMap().setStatus(SUCCESS);
  }

  @RequestMapping("/get")
  public Object get(int no) {
    Store store = storeService.get(no);
    //System.out.println("StoreNo: " + no + ", Get Store: " + store);
    if (store == null) {
      return "";
    }
    return store;
  }

  /*@RequestMapping("/getStoreNo")
  public Object getStorebyStoreNo(int storeNo) {
    Store store = storeService.get(storeNo);
    if (store == null) {
      return new ResultMap().setStatus(FAIL).setData("해당 번호의 게시글이 없습니다.");
    }
    return new ResultMap().setStatus(SUCCESS).setData(store);
  }*/



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

  @RequestMapping("/update")
  public Object update(Store store) {
    return storeService.update(store);

  }

  @RequestMapping("/delete")
  public int delete(int no) {
    //System.out.println("Delete: " + no);
    int row_num = storeService.delete(no);
    //System.out.println("After Update: " + row_num);
    return row_num;
    // return storeService.delete(no);
  }



  @RequestMapping("/store/photo")
  public ResponseEntity<Resource> photo(String filename) {

    try {
      // 다운로드할 파일의 입력 스트림 자원을 준비한다.
      File downloadFile = new File("./src/main/resources/static/asset/img/alcohol/" + filename); // 다운로드 상대 경로 준비
      FileInputStream fileIn = new FileInputStream(downloadFile.getCanonicalPath()); // 다운로드 파일의 실제 경로를 지정하여 입력 스트림 준비
      InputStreamResource resource = new InputStreamResource(fileIn); // 입력 스트림을 입력 자원으로 포장

      // HTTP 응답 헤더를 준비한다.
      HttpHeaders header = new HttpHeaders();
      header.add("Cache-Control", "no-cache, no-store, must-revalidate");
      header.add("Pragma", "no-cache");
      header.add("Expires", "0");

      // 다운로드 파일명을 지정하고 싶다면 다음의 응답 헤더를 추가하라!
      // => 다운로드 파일을 지정하지 않으면 요청 URL이 파일명으로 사용된다.
      header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename);

      return ResponseEntity.ok() // HTTP 응답 프로토콜에 따라 응답을 수행할 생성기를 준비한다.
          .headers(header) // 응답 헤더를 설정한다.
          .contentLength(downloadFile.length()) // 응답할 파일의 크기를 설정한다.
          .contentType(MediaType.APPLICATION_OCTET_STREAM) // 응답 콘텐트의 MIME 타입을 설정한다.
          .body(resource); // 응답 콘텐트를 생성한 후 리턴한다.

    } catch (Exception e) {

      return null;
    }
  }




  private Object saveFile(MultipartFile[] file) throws Exception {

    if (file != null) {
      for (MultipartFile part : file) {
        if (part.getSize() == 0) {
          continue;
        }

        String filename = UUID.randomUUID().toString();

        // 파일명의 확장자를 알아낸다.
        int dotIndex = part.getOriginalFilename().lastIndexOf(".");
        if (dotIndex != -1) {
          filename += part.getOriginalFilename().substring(dotIndex);
        }

        // 파일을 지정된 폴더에 저장한다.
        File photoFile = new File("./src/main/resources/static/asset/img/store/" + filename); // App 클래스를 실행하는 프로젝트 폴더
        part.transferTo(photoFile.getCanonicalFile()); // 프로젝트 폴더의 전체 경로를 전달한다.

      }
    } else {
      return "error";
    }
    return "ok";
  }








  //  @RequestMapping("/store/error")
  //  public error(Store no) {
  //    return storeService.error(no);
  //  }




}