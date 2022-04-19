/* 삭제 추가 */ 
      // 1) URL에서 쿼리스트링(query string)을 추출한다.
   var arr = location.href.split("?"); 
  console.log(arr);

  if (arr.length == 1) {
    alert("요청 형식이 올바르지 않습니다.")
    throw "URL 형식 오류!";
  }

  var qs = arr[1];
  console.log(qs);

  
  var params = new URLSearchParams(qs);
  var storeNo= params.get("storeNo"); 

  if (storeNo == null) {
    alert("해당번호의 가게가 없습니다!");
    throw "파라미터 오류!";
  }
  console.log(no);

//메뉴명, 가격 (db에 넣어줘야하는건가? )
  var xMenu = document.querySelector("input[name=menu]");
  var xPrice=document.querySelector("input[name=price]");
  //파일업로드 추가해야함


  // 3) 서버에서 데이터 가져오기
  fetch(`/store/get?storeNo=${storeNo}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      // 4) 상세 정보를 화면에 출력한다.
      if (result.status == "fail") {
        window.alert("서버 요청 오류!");
        console.log(result.data);
        return;
      }
      
      var store = result.data;
      
      xMenu.value = store.menu;
      xPrice.value = store.price;
      //파일업로드추가해야함 
   
  /* if (menu.Img != null) {
        xPhoto.src = "/menu/img?filename=" + menu.img;
      }*/
    });
    
      /*  for (var i = 1; i < store.menu.length; i++) {
        document.querySelector("#register").click();
      }
      
       for (var i = 1; i < store.price .length; i++) {
        document.querySelector("#register").click();
      }
      // 준비된  입력항목을 가져온다.
      var xMenuDivList = document.querySelectorAll(".menu-section1");
      
      for (var i = 0; i < store.tels.length; i++) {
       var xMenu = xPrice.querySelector("input");
      var xPrice = xPrice.querySelector("input");
        
        xMenu.value = store.menus[i].menu;
        xPrice.value = store.prices[i].price;
      }
    });*/


  document.querySelector("#register").onclick = function() {
    if (xMenu.value == "" ||  xPrice.value == "" ) {
      window.alert("필수 입력 항목이 비어 있습니다.");
      return;
    }
 
  document.querySelector("#add").onclick = function() {
    var xMenuDivList = xTelDivContainer.querySelectorAll(".x-tel-div");
    var firstTel = xMenuDivList[0].querySelector("input"); // 첫번째 전화번호
    if (xName.value == "" || xEmail.value == "" || firstTel.value == "") {
      window.alert("필수 입력 항목이 비어 있습니다.");
      return;
    }

    var qs = `menu=${xMenu.value}&price=${xPrice.value}&Img=${xImg.value}`;
    for (var xTelDiv of xMenuDivList) {
      var xMenu = xPrice.querySelector("input");
      var xPrice = xPrice.querySelector("input");
      
      qs += `&tel=${xTelType.value}_${xTel.value}`;
    }
    console.log(qs);
      
       fetch("/store/update", {
        method: "POST",
        body: new URLSearchParams(fd)
      }).then(function(response) {
        return response.json();
      })
      .then(function(result) {
        if (result.status == "success") {
          location.href = "mypage(CEO)/storeChange2.html";
        } else {
          window.alert("주점 변경 실패!");
          console.log(result.data);
        }
      });
  };
 
 
    document.querySelector("#exit").onclick = function() {
        window.location.href = "../main/main.html";
      };
    

  document.querySelector("#delete").onclick = function() {
    fetch(`/store/delete?storeNo=${storeNo}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) { 
        if (result.status == "success") {
          location.href = "mypage(CEO)/storeChange2.html";
        } else {
          window.alert("주점 삭제 실패!");
          console.log(result.data);
        }
      });
      
  };
  