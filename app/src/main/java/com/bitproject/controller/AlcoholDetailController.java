//package com.bitproject.controller;
//
//import static com.bitproject.controller.ResultMap.FAIL;
//import static com.bitproject.controller.ResultMap.SUCCESS;
//import java.io.File;
//import java.io.FileInputStream;
//import java.util.List;
//import java.util.UUID;
//import javax.servlet.http.HttpSession;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.InputStreamResource;
//import org.springframework.core.io.Resource;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;
//import com.bitproject.domain.AlcoholDetail;
//import com.bitproject.domain.Member;
//import com.bitproject.service.AlcoholDetailService;
//import net.coobird.thumbnailator.Thumbnails;
//import net.coobird.thumbnailator.geometry.Positions;
//
//@RestController 
//public class AlcoholDetailController {
//
//  @Autowired
//  AlcoholDetailService alcoholDetailService;
//
//  @RequestMapping("/alcohol/list")
//  public Object list(int pageSize, int pageNo) throws Exception {
//    System.out.println(new File(".").getCanonicalPath());
//    return alcoholDetailService.list(pageSize, pageNo);
//  }
//
//  @RequestMapping("/alcohol/targetList")
//  public Object targetList(int targetNo, int pageSize, int pageNo) {
//    System.out.println("targetList() 호출됨");
//    System.out.printf("targetNo: %d, pageSize: %d, pageNo: %d \n", targetNo, pageSize, pageNo);
//    return alcoholDetailService.targetList(targetNo, pageSize, pageNo);
//  }
//
//  @PostMapping("/alcohol/add")
//  public Object add(AlcoholDetail alcoholDetail, MultipartFile file, HttpSession session) {
//    Member member = (Member) session.getAttribute("loginUser");
//    alcoholDetail.setWriter(member);
//
//    try {
//      alcoholDetail.setImg(saveFile(file));
//      int count = alcoholDetailService.add(alcoholDetail);
//      if (count == 1) {
//        return new ResultMap().setStatus(SUCCESS);
//      } else {
//        return new ResultMap().setStatus(FAIL).setData("게시글 작성자가 아닙니다.");
//      }
//    }catch (Exception e) {
//      return new ResultMap().setStatus(FAIL);
//    }
//  }
//
//
//  @RequestMapping("/alcohol/get")
//  public Object get(int no) {
//    AlcoholDetail alcoholDetail = alcoholDetailService.get(no);
//    if (alcoholDetail == null) {
//      return new ResultMap().setStatus(FAIL).setData("해당 번호의 데이터가 없습니다.");
//    }
//    return new ResultMap().setStatus(SUCCESS).setData(alcoholDetail);
//  }
//
//  @RequestMapping("/alcohol/getfilt")
//  public List<AlcoholDetail> get(String  filt, String value) {
//    List<AlcoholDetail> alcoholDetail = alcoholDetailService.get(filt, value);
//    //    if (member == null) {
//    //      return ;
//    //    }
//    return alcoholDetail;
//  }
//
//
//  @RequestMapping("/alcohol/size")
//  public int size() {
//    return alcoholDetailService.size();
//  }
//
//  @RequestMapping("/alcohol/targetSize")
//  public int targetSize(int targetNo) {
//    return alcoholDetailService.targetSize(targetNo);
//  }
//
//
//  @RequestMapping("/alcohol/update")
//  public Object update(AlcoholDetail alcoholDetail, MultipartFile file, HttpSession session) {
//    Member member = (Member) session.getAttribute("loginUser");
//    alcoholDetail.setWriter(member);
//    try {
//      alcoholDetail.setImg(saveFile(file));
//      int count = alcoholDetailService.update(alcoholDetail);
//      if (count == 1) {
//        return new ResultMap().setStatus(SUCCESS);
//      } else {
//        return new ResultMap().setStatus(FAIL).setData("게시글 작성자가 아닙니다.");
//      }
//    } catch (Exception e) {
//      e.printStackTrace();
//      return new ResultMap().setStatus(FAIL).setData(e.getMessage());
//    }
//
//
//  }
//
//  @RequestMapping("/alcohol/delete")
//  public Object delete(int no, HttpSession session) {
//    Member member = (Member) session.getAttribute("loginUser");
//    AlcoholDetail alcoholDetail = new AlcoholDetail();
//    alcoholDetail.setWriter(member);
//    alcoholDetail.setAlcoholDetailNo(no);
//    int count = alcoholDetailService.delete(alcoholDetail);
//    if (count == 1) {
//      return new ResultMap().setStatus(SUCCESS);
//    } else {
//      return new ResultMap().setStatus(FAIL).setData("게시글 작성자가 아닙니다.");
//    }
//  }
//
//
//  @RequestMapping("/alcohol/photo")
//  public ResponseEntity<Resource> photo(String filename) {
//
//    try {
//      // 다운로드할 파일의 입력 스트림 자원을 준비한다.
//      File downloadFile = new File("./src/main/resources/static/asset/img/alcohol/" + filename); // 다운로드 상대 경로 준비
//      FileInputStream fileIn = new FileInputStream(downloadFile.getCanonicalPath()); // 다운로드 파일의 실제 경로를 지정하여 입력 스트림 준비
//      InputStreamResource resource = new InputStreamResource(fileIn); // 입력 스트림을 입력 자원으로 포장
//
//      // HTTP 응답 헤더를 준비한다.
//      HttpHeaders header = new HttpHeaders();
//      header.add("Cache-Control", "no-cache, no-store, must-revalidate");
//      header.add("Pragma", "no-cache");
//      header.add("Expires", "0");
//
//      // 다운로드 파일명을 지정하고 싶다면 다음의 응답 헤더를 추가하라!
//      // => 다운로드 파일을 지정하지 않으면 요청 URL이 파일명으로 사용된다.
//      header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename);
//
//
//
//      //      // HTTP 응답 생성기를 사용하여 다운로드 파일의 응답 데이터를 준비한다.
//      //      BodyBuilder http응답생성기 = ResponseEntity.ok(); // 요청 처리에 성공했다는 응답 생성기를 준비한다.
//      //      http응답생성기.headers(header); // HTTP 응답 헤더를 설정한다.
//      //      http응답생성기.contentLength(downloadFile.length()); // 응답 콘텐트의 파일 크기를 설정한다.
//      //      http응답생성기.contentType(MediaType.APPLICATION_OCTET_STREAM); // 응답 데이터의 MIME 타입을 설정한다.
//      //      
//      //      // 응답 데이터를 포장한다.
//      //      ResponseEntity<Resource> 응답데이터 = http응답생성기.body(resource);
//      //      
//      //      return 응답데이터; // 포장한 응답 데이터를 클라이언트로 리턴한다.
//
//      return ResponseEntity.ok() // HTTP 응답 프로토콜에 따라 응답을 수행할 생성기를 준비한다.
//          .headers(header) // 응답 헤더를 설정한다.
//          .contentLength(downloadFile.length()) // 응답할 파일의 크기를 설정한다.
//          .contentType(MediaType.APPLICATION_OCTET_STREAM) // 응답 콘텐트의 MIME 타입을 설정한다.
//          .body(resource); // 응답 콘텐트를 생성한 후 리턴한다.
//
//    } catch (Exception e) {
//
//      return null;
//    }
//  }
//
//
//  private String saveFile(MultipartFile file) throws Exception {
//    if (file != null && file.getSize() > 0) { 
//      // 파일을 저장할 때 사용할 파일명을 준비한다.
//      String filename = UUID.randomUUID().toString();
//      System.out.println(filename);
//
//      // 파일명의 확장자를 알아낸다.
//      int dotIndex = file.getOriginalFilename().lastIndexOf(".");
//      if (dotIndex != -1) {
//        filename += file.getOriginalFilename().substring(dotIndex);
//      }
//
//      // 파일을 지정된 폴더에 저장한다.
//      File photoFile = new File("./src/main/resources/static/asset/img/alcohol/" + filename); // App 클래스를 실행하는 프로젝트 폴더
//      file.transferTo(photoFile.getCanonicalFile()); // 프로젝트 폴더의 전체 경로를 전달한다.
//
//      // 썸네일 이미지 파일 생성
//      Thumbnails.of(photoFile)
//      .size(178, 173)
//      .crop(Positions.CENTER)
//      .toFile(new File("./src/main/resources/static/asset/img/alcohol/" + "178x173_" + filename));
//
//      return filename;
//
//    } else {
//      return null;
//    }
//  }
//}
