let tbody = document.querySelector("#x-store-table tbody")
let paginationUl = document.querySelector(".pagination-ul")
let currTable = document.querySelector("#x-curr-table")




let pageSize = 10;
let pageCount = 10; // 페이징에 나타낼 페이지 수
let totalStorePage = 0;
let totalStoreCount = 0;
let operStoreCount = 0;
let withdrawStoreCount = 0;





$(document).ready(function() {
  // 페이지 버튼 생성
  fetch("/admin/store/size")
    .then(response => {
      return response.json()
    })
    .then(result => {
      totalStoreCount = result

      //   console.log(result);
      //   let totalStorePage = Math.ceil(result / pageSize)
      //   console.log(totalStorePage)
      //
      //   for (let i = 1; i <= totalStorePage; i++) {
      //     let paginationLi = `
      // <li class="x-page-btn" onclick="storeList(${i})">${i}</li>
      // `
      //     paginationUl.innerHTML += paginationLi;
      //
      //   }
      paging(totalStoreCount, pageSize, pageCount, 1)
    })
})

function paging(totalStoreCount, pageSize, pageCount, currentPage) {
  console.log("currentPage : " + currentPage);
  console.log(totalStoreCount);

  totalStorePage = Math.ceil(totalStoreCount / pageSize) // 총 페이지 수\
  console.log(totalStorePage);

  if (totalStorePage < pageCount) {
    pageCount = totalStorePage;
  }

  let pageGroup = Math.ceil(currentPage / pageCount) // 페이지 그룹
  let last = pageGroup * pageCount // 화면에 보여질 마지막 페이지 번호

  if (last > totalStorePage) {
    last = totalStorePage
  }


  let first = last - (pageCount - 1); //화면에 보여질 첫번째 페이지 번호
  let next = last + 1;
  let prev = first - 1;

  if (last % pageCount != 0) {
    first = currentPage
    last = totalStorePage
  }

  let pageHtml = "";

  if (prev > 0) {
    pageHtml += "<li><a href='#' id='prev'> 이전 </a></li>";
  }

  console.log(first);
  console.log(last);

  //페이징 번호 표시
  for (var i = first; i <= last; i++) {
    if (currentPage == i) {
      pageHtml +=
        "<li class='on'><a href='#' id='" + i + "'>" + i + "</a></li>";
    } else {
      pageHtml += "<li><a href='#' id='" + i + "'>" + i + "</a></li>";
    }
  }

  if (last < totalStorePage) {
    pageHtml += "<li><a href='#' id='next'> 다음 </a></li>";
  }

  $(".pagination-ul").html(pageHtml)

  //페이징 번호 클릭 이벤트
  $(".pagination-ul li a").click(function() {
    let $id = $(this).attr("id");
    selectedPage = $(this).text();

    if ($id == "next") selectedPage = next;
    if ($id == "prev") selectedPage = prev;



    //페이징 표시 재호출
    paging(totalStoreCount, pageSize, pageCount, selectedPage);

    storeList(selectedPage);

  });

}

fetch("/admin/store/list")
  .then(response => {
    return response.json()
  })
  .then(result => {
    for (store of result) {
      if (store.status == 0) {
        withdrawStoreCount++;
      }
      if (store.status == 1) {
        operStoreCount++;
      }

      totalStoreCount = operStoreCount + withdrawStoreCount

      // 주점 현황 테이블
      let currDt = `
            <th>전체주점수</th>
            <td>${totalStoreCount}</td>
            <th>운영중주점수</th>
            <td>${operStoreCount}</td>
            <th>삭제주점수</th>
            <td>${withdrawStoreCount}</td>
      `
      currTable.innerHTML = currDt


    }
  })





// 멤버 페이지
function storeList(pageNo) {
  $(tbody).empty()

  fetch(`/admin/store/pagelist?pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(response => {
      return response.json()
    })
    .then(stores => {
      console.log(stores);
      createList(stores);
    })
}

// 리스트 생성
function createList(stores) {
  for (let store of stores) {

    if (store.reservationAccept == true) {
      store.reservationAccept = "가능"
    } else {
      store.reservationAccept = "불가"
    }

    if (store.oper == true) {
      store.oper = "영업중"
    } else {
      store.oper = "휴점"
    }

    if (store.status == true) {
      store.status = "일반"
    } else {
      store.status = "삭제"
    }

    // 멤버 테이블
    let storeTr = `
 <tr style="height:50px;">
   <td>${store.storeNo}</td>
   <td>${store.storeName}</td>
   <td>${store.address}</td>
   <td>${store.tel}</td>
   <td>${store.businessRegistrationNo}</td>
   <td>${store.reservationAccept}</td>
   <td>${store.oper}</td>
   <td>${store.status}</td>
   <td>${store.blockCount}</td>
   <td><button class="x-sanction-btn" type="button" name="button" value="${store.storeNo}">제재</button>
   <button class="x-delete-btn" type="button" name="button" value="${store.storeNo}">삭제</button></td>
 </tr>
`
    tbody.innerHTML += storeTr
  }
}


// 검색
$('.x-search-btn').on("click", () => {
  let searchFilt = $('.x-search-div select').val()
  let searchValue = $('.x-search-div input').val()

  if (searchValue == "") {
    alert("검색어를 입력하세요")
    return;
  }
  $(tbody).empty()
  $(paginationUl).empty()
  fetch(`/admin/store/get?filt=${searchFilt}&value=${searchValue}`)
    .then(response => {
      return response.json()
    })
    .then(stores => {
      if (alcohols.length == 0) {
        alert("검색 결과가 없습니다.")
        location.reload()
      }
      createList(stores);
    })
})
// 페이지 버튼 hover
$(paginationUl).on("click", (e) => {
  $(".pagination-ul li").removeClass("page-btn-active")
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.target.classList.add("page-btn-active")
  }
  console.log(e.target);
})

// 주점 제재 버튼
$(document).on("click", ".x-sanction-btn", (e) => {
  console.log(e.target.value);
  if (window.confirm("정말 제재하시겠습니까?")) {
    fetch(`/admin/store/update?no=${e.target.value}`)
      .then(response => {
        return response.json()
      })
      .then(result => {
        console.log(result);
        if (result.status == "success") {
          location.reload();
        } else {
          alert(result.data);
        }
      })
  } else {
    return;
  }
})

// 주점 삭제 버튼
$(document).on("click", ".x-delete-btn", (e) => {
  console.log(e.target.value);
  if (window.confirm("정말 삭제시키시겠습니까?")) {
    fetch(`/admin/store/delete?no=${e.target.value}`)
      .then(response => {
        return response.json()
      })
      .then(result => {
        if (result.status == "success") {
          alert("삭제 전환 완료했습니다.")
          location.reload();
        } else {
          console.log("삭제실패");
          alert(result.data);
        }
      })
  } else {
    return;
  }
})
