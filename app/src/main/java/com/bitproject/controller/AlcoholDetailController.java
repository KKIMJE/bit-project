package com.bitproject.controller;

import static com.bitproject.controller.ResultMap.FAIL;
import static com.bitproject.controller.ResultMap.SUCCESS;
import java.io.File;
import java.io.FileInputStream;
import java.util.List;
import java.util.UUID;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.bitproject.domain.AlcoholDetail;
import com.bitproject.domain.Member;
import com.bitproject.service.AlcoholDetailService;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;

@RestController 
public class AlcoholDetailController {

  @Autowired
  AlcoholDetailService alcoholDetailService;

  @RequestMapping("/alcohol/list")
  public Object list(int pageSize, int pageNo) {
    return alcoholDetailService.list(pageSize, pageNo);
  }

  @RequestMapping("/alcohol/targetList")
  public Object targetList(int targetNo, int pageSize, int pageNo) {
    System.out.println("targetList() 호출됨");
    System.out.printf("targetNo: %d, pageSize: %d, pageNo: %d \n", targetNo, pageSize, pageNo);
    return alcoholDetailService.targetList(targetNo, pageSize, pageNo);
  }

  @PostMapping("/alcohol/add")
  public Object add(AlcoholDetail alcoholDetail, MultipartFile file, HttpSession session) {
    Member member = (Member) session.getAttribute("loginUser");
    alcoholDetail.setWriter(member);

    try {
      alcoholDetail.setImg(saveFile(file));
      int count = alcoholDetailService.add(alcoholDetail);
      if (count == 1) {
        return new ResultMap().setStatus(SUCCESS);
      } else {
        return new ResultMap().setStatus(FAIL).setData("게시글 작성자가 아닙니다.");
      }
    }catch (Exception e) {
      return new ResultMap().setStatus(FAIL);
    }
  }


  @RequestMapping("/alcohol/get")
  public Object get(int no) {
    AlcoholDetail alcoholDetail = alcoholDetailService.get(no);
    if (alcoholDetail == null) {
      return new ResultMap().setStatus(FAIL).setData("해당 번호의 데이터가 없습니다.");
    }
    return new ResultMap().setStatus(SUCCESS).setData(alcoholDetail);
  }

  @RequestMapping("/alcohol/getfilt")
  public List<AlcoholDetail> get(String  filt, String value) {
    List<AlcoholDetail> alcoholDetail = alcoholDetailService.get(filt, value);
    //    if (member == null) {
    //      return ;
    //    }
    return alcoholDetail;
  }


  @RequestMapping("/alcohol/size")
  public int size() {
    return alcoholDetailService.size();
  }

  @RequestMapping("/alcohol/targetSize")
  public int targetSize(int targetNo) {
    return alcoholDetailService.targetSize(targetNo);
  }


  @RequestMapping("/alcohol/update")
  public Object update(AlcoholDetail alcoholDetail, MultipartFile file, HttpSession session) {
    Member member = (Member) session.getAttribute("loginUser");
    alcoholDetail.setWriter(member);
    try {
      alcoholDetail.setImg(saveFile(file));
      int count = alcoholDetailService.update(alcoholDetail);
      if (count == 1) {
        return new ResultMap().setStatus(SUCCESS);
      } else {
        return new ResultMap().setStatus(FAIL).setData("게시글 작성자가 아닙니다.");
      }
    } catch (Exception e) {
      e.printStackTrace();
      return new ResultMap().setStatus(FAIL).setData(e.getMessage());
    }


  }

  @RequestMapping("/alcohol/delete")
  public Object delete(int no, HttpSession session) {
    Member member = (Member) session.getAttribute("loginUser");
    AlcoholDetail alcoholDetail = new AlcoholDetail();
    alcoholDetail.setWriter(member);
    alcoholDetail.setAlcoholDetailNo(no);
    int count = alcoholDetailService.delete(alcoholDetail);
    if (count == 1) {
      return new ResultMap().setStatus(SUCCESS);
    } else {
      return new ResultMap().setStatus(FAIL).setData("게시글 작성자가 아닙니다.");
    }
  }


  @RequestMapping("/alcohol/photo")
  public ResponseEntity<Resource> photo(String filename) {

    try {
      File downloadFile = new File("./src/main/resources/static/asset/img/alcohol/" + filename);
      FileInputStream fileIn = new FileInputStream(downloadFile.getCanonicalPath()); 
      InputStreamResource resource = new InputStreamResource(fileIn); 

      HttpHeaders header = new HttpHeaders();
      header.add("Cache-Control", "no-cache, no-store, must-revalidate");
      header.add("Pragma", "no-cache");
      header.add("Expires", "0");

      header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename);


      return ResponseEntity.ok()
          .headers(header)
          .contentLength(downloadFile.length())
          .contentType(MediaType.APPLICATION_OCTET_STREAM) 
          .body(resource);

    } catch (Exception e) {

      return null;
    }
  }


  private String saveFile(MultipartFile file) throws Exception {
    if (file != null && file.getSize() > 0) { 
      String filename = UUID.randomUUID().toString();
      System.out.println(filename);

      int dotIndex = file.getOriginalFilename().lastIndexOf(".");
      if (dotIndex != -1) {
        filename += file.getOriginalFilename().substring(dotIndex);
      }

      File photoFile = new File("./src/main/resources/static/asset/img/alcohol/" + filename); 
      file.transferTo(photoFile.getCanonicalFile()); 

      Thumbnails.of(photoFile)
      .size(178, 173)
      .crop(Positions.CENTER)
      .toFile(new File("./src/main/resources/static/asset/img/alcohol/" + "178x173_" + filename));

      return filename;

    } else {
      return null;
    }
  }
}
