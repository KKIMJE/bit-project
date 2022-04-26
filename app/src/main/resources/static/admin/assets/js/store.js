let tbody = document.querySelector("#x-store-table tbody")
let paginationUl = document.querySelector(".pagination-ul")
let currTable = document.querySelector("#x-curr-table")




let pageSize = 10;
let pageNo = 1;
let totalStorePage;
let totalStoreCount;


// 전체 회원 수 및 페이지 버튼 생성
fetch("/admin/store/size")
  .then(response => {
    return response.json()
  })
  .then(result => {
    console.log(result);
    totalStoreCount = result
    totalStorePage = Math.ceil(result / pageSize)
    console.log(totalStorePage);

    for (let i = 1; i <= totalStorePage; i++) {
      console.log("aaa");
      let paginationLi = `
    <li><span><a class="x-page-btn" onclick="storeList(${i})">${i}</a></span></li>
    `
      paginationUl.innerHTML += paginationLi;
    }
  })

// 멤버 페이지
function storeList(pageNo) {
  $(tbody).empty()

  fetch(`/admin/store/list?pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(response => {
      return response.json()
    })
    .then(members => {
      console.log(members);

      createList(members);

      // 회원 현황 테이블
      let currDt = `
            <th>전체주점수</th>
            <td>${totalStoreCount}</td>
      `
      currTable.innerHTML = currDt

    })
}


function createList(stores) {
  for (let store of stores) {
    console.log(store.storeCount);

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
      store.status = "정지"
    }

    // 멤버 테이블
    let storeTr = `
 <tr style="height:50px;">
   <td>${store.storeNo}</td>
   <td>${store.storeName}</td>
   <td>${store.address}</td>
   <td>${store.tel}</td>
   <td>${store.businessRegistrationNo}</td>
   <td>${store.evaluationScore}</td>
   <td>${store.reservationAccept}</td>
   <td>${store.oper}</td>
   <td>${store.status}</td>
   <td><button type="button" name="button">제재</button><button type="button" name="button">탈퇴</button></td>
 </tr>
`
    tbody.innerHTML += storeTr
  }
}


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
      createList(stores);
    })

})
