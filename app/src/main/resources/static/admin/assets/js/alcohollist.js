let tbody = document.querySelector("#x-alcohol-table tbody")
let paginationUl = document.querySelector(".pagination-ul")
let currTable = document.querySelector("#x-curr-table")




let pageSize = 10;
let pageNo = 1;
let totalAlcoholPage;
let totalAlcoholCount;


// 전체 주류 수 및 페이지 버튼 생성
fetch("/alcohol/size")
  .then(response => {
    return response.json()
  })
  .then(result => {
    totalAlcoholCount = result
    totalAlcoholPage = Math.ceil(result / pageSize)
    console.log(totalAlcoholPage);

    for (let i = 1; i <= totalAlcoholPage; i++) {
      let paginationLi = `
    <li class="x-page-btn" onclick="alcoholList(${i})">${i}</li>
    `
      paginationUl.innerHTML += paginationLi;
    }
  })






// 멤버 페이지
function alcoholList(pageNo) {
  $(tbody).empty()

  fetch(`/alcohol/list?pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(response => {
      return response.json()
    })
    .then(alcohols => {
        createList(alcohols);

      // 회원 현황 테이블
      let currDt = `
            <th>전체주류</th>
            <td>${totalAlcoholCount}</td>
      `
      currTable.innerHTML = currDt

    })
}


function createList(alcohols) {
  for (let alcohol of alcohols) {
    switch(alcohol.alcoholTypeNo) {
      case 1:
      alcohol.alcoholTypeNo = "소주"
      break;

      case 2:
      alcohol.alcoholTypeNo = "맥주"
      break;

      case 3:
      alcohol.alcoholTypeNo = "와인"
      break;

      case 4:
      alcohol.alcoholTypeNo = "막걸리"
      break;

      case 5:
      alcohol.alcoholTypeNo = "양주"
      break;

      case 6:
      alcohol.alcoholTypeNo = "사케"
      break;

      case 7:
      alcohol.alcoholTypeNo = "전통주"
      break;

      case 8:
      alcohol.alcoholTypeNo = "기타"
      break;
    }

    // 주류 테이블
    let alcoholTr = `
 <tr style="height:50px;">
   <td>${alcohol.alcoholDetailNo}</td>
   <td>${alcohol.alcoholTypeNo}</td>
   <td>${alcohol.alcoholName}</td>
   <td>${alcohol.degree}</td>
   <td>${alcohol.brand}</td>
   <td>${alcohol.origin}</td>
   <td>${alcohol.volume}</td>
   <td><button type="button" onclick="location.href='alcoholupdate.html?no=${alcohol.alcoholDetailNo}'">수정</button><button type="button" class="x-delete-btn" value="${alcohol.alcoholDetailNo}">삭제</button></td>
 </tr>
`
    tbody.innerHTML += alcoholTr
  }
  $(".x-delete-btn").on("click", (e) => {
    console.log(e.target.value);

    fetch(`/alcohol/delete?no=${e.target.value}`)
    .then(response => {
      return response.json()
    })
    .then(result => {
      if (result.status == "success") {
        location.href = "/admin/alcohollist.html";
      } else {
        window.alert("데이터 삭제 실패!");
        console.log(result.data);
      }
    })
  })
}

// 주류 검색
$('.x-search-btn').on("click", () => {
  let searchFilt = $('.x-search-div select').val()
  let searchValue = $('.x-search-div input').val()
  console.log(searchFilt);
  console.log(searchValue);

  if (searchValue == "") {
    alert("검색어를 입력하세요")
    return
  }

  switch(searchValue) {
    case "소주":
    searchValue = "1"
    break;

    case "맥주":
    searchValue = "2"
    break;

    case "와인":
    searchValue = "3"
    break;

    case "막걸리":
    searchValue = "4"
    break;

    case "양주":
    searchValue = "5"
    break;

    case "사케":
    searchValue = "6"
    break;

    case "전통주":
    searchValue = "7"
    break;

    case "기타":
    searchValue = "8"
    break;
    // default:
    // alert("없는 타입의 주류 입니다.")
  }

  console.log(searchFilt);
  console.log(searchValue);


  $(tbody).empty()
  $(paginationUl).empty()
  fetch(`/alcohol/getfilt?filt=${searchFilt}&value=${searchValue}`)
    .then(response => {
      return response.json()
    })
    .then(alcohols => {
      createList(alcohols);
    })
})

$(paginationUl).on("click", (e) => {
  $(".pagination-ul li").removeClass("page-btn-active")
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.target.classList.add("page-btn-active")
  }
console.log(e.target);
})
