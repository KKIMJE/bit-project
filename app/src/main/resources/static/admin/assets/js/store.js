let tbody = document.querySelector("#x-store-table tbody")
let paginationUl = document.querySelector(".pagination-ul")
let currTable = document.querySelector("#x-curr-table")




let pageSize = 10;
let pageNo = 1;
let totalStorePage = 0;
let totalStoreCount = 0;
let operStoreCount = 0;
let withdrawStoreCount = 0;






// 페이지 버튼 생성
fetch("/admin/store/size")
  .then(response => {
    return response.json()
  })
  .then(result => {
    console.log(result);
    let totalStorePage = Math.ceil(result / pageSize)
    console.log(totalStorePage)

    for (let i = 1; i <= totalStorePage; i++) {
      let paginationLi = `
    <li class="x-page-btn" onclick="storeList(${i})">${i}</li>
    `
      paginationUl.innerHTML += paginationLi;

    }
  })

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
