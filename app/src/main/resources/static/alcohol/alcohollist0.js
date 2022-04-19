const lightBtn = document.querySelector('.category-sort-div');
const filterBtn = document.querySelector('.filter')
var itemDiv = document.querySelector(".alclist-item-div")
const preBtn = document.querySelector(".pre-btn")
const nextBtn = document.querySelector(".next-btn")
let pageNumber = document.querySelector(".page-number")
var pageBtnDiv = document.querySelector(".page-btn-div")
// var listDiv = document.querySelector(".alcohol-list-div")

var targetArr = [];
var categoryTargetNo;
var filterTargetNo;
let pageSize = 10;
let pageNo = 1;
let totalPageSize = 0; // 전체 페이지 사이즈
let totalTargetPageSize = 0; // 카테고리별 페이지 사이즈

// 전체 주류 개수
fetch("/alcohol/size")
  .then(response => {
    return response.json()
  })
  .then(size => {
    totalPageSize = Math.ceil(size / pageSize); // 총 페이지 수
    console.log(totalPageSize);
  });

// 도수별 정렬
function degreeSort(alcoholArr) {
  alcoholArr.sort((a, b) => {
    return a.degree - b.degree;
  })
}

// 가나다순 정렬
function alphabeticalOrderSort(alcoholArr) {
  alcoholSortArr = alcoholArr.sort((a, b) => {
    let x = a.alcoholName.toLowerCase();
    let y = b.alcoholName.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  })
}

// list 생성
function createdList(listArr) {
  targetArr = [];
  $('.alcohol-list-div div').empty()
  for (let alcohol of listArr) {
    let div = document.createElement("div")
    div.classList.add("card")
    div.classList.add("border-white")
    div.innerHTML = `
      <a class="alc-link" href="alcoholdetail.html?no=${alcohol.alcoholDetailNo}">
        <img src="${alcohol.img}" class="card-img-top">
        <div class="card-body">
          <p class="card-text">
          <ul>
            <li>${alcohol.alcoholName}</li>
            <li class="alchol-degree-value">${alcohol.degree}%</li>
          </ul>
          </p>
        </div>
      </a>
    `
    itemDiv.appendChild(div)
    targetArr.push(alcohol)
  }
}

// target 주류 개수
function targetAlcoholPageSize(targetNo) {
fetch(`/alcohol/targetSize?targetNo=${targetNo}`)
  .then(response => {
    return response.json()
  })
  .then(size => {
    totalTargetPageSize = Math.ceil(size / pageSize); // target 총 페이지 수
    console.log(totalTargetPageSize);
  });
}

// 전체 list 생성
function allList() {
  pageNumber.innerHTML = "1";
  fetch(`/alcohol/list?pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      createdList(alcohols);
      console.log(targetArr);
    })
}

// 다음 버튼
nextBtn.addEventListener("click", (e) => {
  if (pageNo < totalPageSize) {
    nextBtn.classList.remove("page-btn-act")
    preBtn.classList.remove("page-btn-act")
  }
  console.log(totalPageSize);
  fetch(`/alcohol/list?pageSize=${pageSize}&pageNo=${pageNo + 1}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      createdList(alcohols);
    })
  pageNo++;
  pageNumber.innerHTML = pageNo;
  if (pageNo == totalPageSize) {
    nextBtn.classList.add("page-btn-act")
  }
})

// 이전 버튼
preBtn.addEventListener("click", (e) => {
  fetch(`/alcohol/list?pageSize=${pageSize}&pageNo=${pageNo - 1}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      createdList(alcohols);
    })
  pageNo--;
  pageNumber.innerHTML = pageNo;
  if (pageNo < totalPageSize) {
    nextBtn.classList.remove("page-btn-act")
  }
  if (pageNo == 1) {
    preBtn.classList.add("page-btn-act")
  }
})


// target list 생성
function targetList(targetNo) {
  pageNumber.innerHTML = "1";
  fetch(`/alcohol/targetList?targetNo=${targetNo}&pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      createdList(alcohols);
      console.log(targetArr);
    })
}


// 카테고리 버튼
lightBtn.addEventListener("click", function(e) {
  targetArr = [];
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act');
    e.target.classList.toggle('act');

    $('.alcohol-list-div div').empty()

    categoryTargetNo = e.target.value

    console.log(categoryTargetNo);

    if (categoryTargetNo == 0) {
      pageNo = 1;
      preBtn.classList.add("page-btn-act")
      allList()
    }
    if (categoryTargetNo != 0) {
      pageNo = 1;
      preBtn.classList.add("page-btn-act")
      targetList(categoryTargetNo)
    }
  }
});

// 필터 버튼
filterBtn.addEventListener("click", function(e) {
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.filterAct').classList.toggle('filterAct');
    e.target.classList.toggle('filterAct');

    filterTargetNo = e.target.value

    console.log(filterTargetNo);

    if (filterTargetNo == 0) {
      degreeSort(targetArr);
      createdList(targetArr);
    }
    if (filterTargetNo == 1) {
      alphabeticalOrderSort(targetArr);
      createdList(targetArr);
    }
  }
})
