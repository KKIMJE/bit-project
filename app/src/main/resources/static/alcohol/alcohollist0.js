const lightBtn = document.querySelector('.category-sort-div');
const filterBtn = document.querySelector('.filter')
var itemDiv = document.querySelector(".alclist-item-div")
const preBtn = document.querySelector(".pre-btn")
const nextBtn = document.querySelector(".next-btn")
let pageNumber = document.querySelector(".page-number")
var pageBtnDiv = document.querySelector(".page-btn-div")
// var listDiv = document.querySelector(".alcohol-list-div")

var targetArr = [];
let pageSize = 10;
let pageNo = 1;
let totalPageSize = 0; // 전체 페이지 사이즈
let totalTargetPageSize = 0; // 카테고리별 페이지 사이즈
let totalAlcoholSize = 0; // 전체 주류 개수
let targetAlcoholSize = 0; // target 주류 개수

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





// 전체 주류 개수
fetch("/alcohol/size")
  .then(response => {
    return response.json()
  })
  .then(size => {
    totalAlcoholSize = size // 전체 주류 개수
    console.log(totalAlcoholSize);
    totalPageSize = Math.ceil(size / pageSize); // 총 페이지 수
    console.log(totalPageSize);

  });





// 다음 버튼
nextBtn.addEventListener("click", (e) => {
  if (pageNo < totalPageSize) {
    nextBtn.classList.remove("page-btn-act")
    preBtn.classList.remove("page-btn-act")
  }
  $('.alcohol-list-div div').empty()
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
  $('.alcohol-list-div div').empty()
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




// 전체 list 생성
function allList() {
  fetch(`/alcohol/list?pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      createdList(alcohols);
      console.log(targetArr);
    })
}

// target list 생성
function targetList(targetNo) {
  pageNo = 1;
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

    let targetNo = e.target.value

    if (targetNo == 0) {
      allList()
    }
    if (targetNo != 0) {
      targetList(targetNo)
      // target 주류 개수
      fetch(`/alcohol/targetSize?targetNo=${targetNo}`)
        .then(response => {
          return response.json()
        })
        .then(size => {
          targetAlcoholSize = size // target 주류 개수
          totalTargetPageSize = Math.ceil(size / pageSize); // target 총 페이지 수
          console.log(targetAlcoholSize);
          console.log(totalTargetPageSize);
        });

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

    $('.alcohol-list-div div').empty()

    let targetNo = e.target.value

    if (targetNo == 0) {
      degreeSort(targetArr);
      createdList(targetArr);
    }
    if (targetNo == 1) {
      alphabeticalOrderSort(targetArr)
      createdList(targetArr)
    }
  }
})
