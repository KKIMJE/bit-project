const lightBtn = document.querySelector('.category-sort-div');
const filterBtn = document.querySelector('.filter')
var itemDiv = document.querySelector(".alclist-item-div")
const preBtn = document.querySelector(".pre-btn")
const nextBtn = document.querySelector(".next-btn")
let pageNumber = document.querySelector(".page-number")
// var listDiv = document.querySelector(".alcohol-list-div")

var targetArr = [];
let pageSize = 10;
let pageNo = 1;
let totalPageSize = 0;
let alcoholSize = 0;

fetch("/alcohol/size")
  .then(response => {
    return response.json()
  })
  .then(size => {
    totalPageSize = Math.ceil(size / pageSize); // 총 페이지 수
  });


nextBtn.addEventListener("click", (e) => {
  console.log(pageNo);
  $('.alcohol-list-div div').empty()
  console.log(totalPageSize);
  fetch(`/alcohol/list?pageSize=${pageSize}&pageNo=${pageNo + 1}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
        for (var i = 0; i < alcohols.length; i++) {
          let div = document.createElement("div")
          div.classList.add("card")
          div.classList.add("border-white")
          div.innerHTML = `
          <a class="alc-link" href="alcoholdetail.html?no=${alcohols[i].alcoholDetailNo}">
            <img src="${alcohols[i].img}" class="card-img-top">
            <div class="card-body">
              <p class="card-text">
              <ul>
                <li>${alcohols[i].alcoholName}</li>
                <li class="alchol-degree-value">${alcohols[i].degree}%</li>
              </ul>
              </p>
            </div>
          </a>
        `
          itemDiv.appendChild(div)
        }
        pageNo++;
        pageNumber.innerHTML = pageNo;
    })
})


preBtn.addEventListener("click", (e) => {
  $('.alcohol-list-div div').empty()
  fetch(`/alcohol/list?pageSize=${pageSize}&pageNo=${pageNo - 1}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      for (var i = 0; i < alcohols.length; i++) {
        let div = document.createElement("div")
        div.classList.add("card")
        div.classList.add("border-white")
        div.innerHTML = `
          <a class="alc-link" href="alcoholdetail.html?no=${alcohols[i].alcoholDetailNo}">
            <img src="${alcohols[i].img}" class="card-img-top">
            <div class="card-body">
              <p class="card-text">
              <ul>
                <li>${alcohols[i].alcoholName}</li>
                <li class="alchol-degree-value">${alcohols[i].degree}%</li>
              </ul>
              </p>
            </div>
          </a>
        `
        itemDiv.appendChild(div)
        // targetArr.push(alcohols[i])
      }
    })
  pageNo--;
  pageNumber.innerHTML = pageNo;
})



function degreeSort(alcoholArr) {
  alcoholArr.sort((a, b) => {
    return a.degree - b.degree;
  })
}

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

function sortList(sortListArr) {
  for (var i = 0; i < sortListArr.length; i++) {
    let div = document.createElement("div")
    div.classList.add("card")
    div.classList.add("border-white")
    div.innerHTML = `
      <a class="alc-link" href="alcoholdetail.html?no=${sortListArr[i].alcoholDetailNo}">
        <img src="${sortListArr[i].img}" class="card-img-top">
        <div class="card-body">
          <p class="card-text">
          <ul>
            <li>${sortListArr[i].alcoholName}</li>
            <li class="alchol-degree-value">${sortListArr[i].degree}%</li>
          </ul>
          </p>
        </div>
      </a>
    `
    itemDiv.appendChild(div)
  }
}

function allList() {
  fetch(`/alcohol/list?pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      for (var i = 0; i < alcohols.length; i++) {
        let div = document.createElement("div")
        div.classList.add("card")
        div.classList.add("border-white")
        div.innerHTML = `
          <a class="alc-link" href="alcoholdetail.html?no=${alcohols[i].alcoholDetailNo}">
            <img src="${alcohols[i].img}" class="card-img-top">
            <div class="card-body">
              <p class="card-text">
              <ul>
                <li>${alcohols[i].alcoholName}</li>
                <li class="alchol-degree-value">${alcohols[i].degree}%</li>
              </ul>
              </p>
            </div>
          </a>
        `
        itemDiv.appendChild(div)
        targetArr.push(alcohols[i])
      }
      console.log(targetArr);
    })
}

function targetList(targetNo) {
  fetch("/alcohol/list")
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      for (var i = 0; i < alcohols.length; i++) {
        if (targetNo == alcohols[i].alcoholTypeNo) {
          let targetDiv = document.createElement("div")
          targetDiv.classList.add("card")
          targetDiv.classList.add("border-white")
          targetDiv.innerHTML = `
        <a class="alc-link" href="alcoholdetail.html?no=${alcohols[i].alcoholDetailNo}">
        <img src="${alcohols[i].img}" class="card-img-top">
        <div class="card-body">
        <p class="card-text">
        <ul>
        <li>${alcohols[i].alcoholName}</li>
        <li class="alchol-degree-value">${alcohols[i].degree}%</li>
        </ul>
        </p>
        </div>
        </a>
        `
          itemDiv.appendChild(targetDiv)
          targetArr.push(alcohols[i]);
        }
      }
    })
}


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

    }
  }
});

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
      sortList(targetArr);
    }
    if (targetNo == 1) {
      alphabeticalOrderSort(targetArr)
      sortList(targetArr)
    }
  }
})
