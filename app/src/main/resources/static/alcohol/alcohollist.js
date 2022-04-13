const lightBtn = document.querySelector('.category-sort-div');
const filterBtn = document.querySelector('.filter')
var itemDiv = document.querySelector(".alclist-item-div")
// var listDiv = document.querySelector(".alcohol-list-div")

var targetArr = [];

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
  fetch("/alcohol/list")
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
  $('.alcohol-list-div div').empty()
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act');
    e.target.classList.toggle('act');

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
  $('.alcohol-list-div div').empty()
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.filterAct').classList.toggle('filterAct');
    e.target.classList.toggle('filterAct');

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





// if (count % 5 == 0) {
//   var itemDiv = document.createElement("div")
//   itemDiv.classList.add("alclist-item-div")
//   itemDiv.classList.add("d-flex")
//   itemDiv.classList.add("flex-row")
//   listDiv.appendChild(itemDiv)
// }

// $('.alcohol-list-div div').empty()


// console.log(e.target.value);

// fetch("/alcohol/list")
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(alcohols) {
//     $('.alcohol-list-div div').empty()
//     var count = 0;
//     for (var i = 0; i < alcohols.length; i++) {
//       var itemDiv = document.querySelector(".alclist-item-div")
//       if (e.target.value == alcohols[i].alcoholTypeNo) {
//         count++
//
//         if (count == 5) {
//           makeItemDiv();
//         }
//
//         var div = document.createElement("div")
//         div.classList.add("card")
//         div.classList.add("border-white")
//         div.innerHTML = `
//         <a href="alcoholdetail.html?no=${alcohols[i].no}">
//           <img src="${alcohols[i].img}" class="card-img-top">
//           <div class="card-body">
//             <p class="card-text">
//             <ul>
//               <li>${alcohols[i].name}</li>
//               <li>${alcohols[i].degree}%</li>
//             </ul>
//             </p>
//           </div>
//         </a>
//       `
//         itemDiv.appendChild(div)
//       }
//     }
//   })









// fetch("/alcohol/list")
//   .then(function(response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function(alcohols) {
//     console.log(alcohols);
//
//     for (var i = 0; i < alcohols.length; i++) {
//       if (i % 5 == 0) {
//         var no = 1
//         var itemDiv = document.createElement("div")
//         itemDiv.classList.add(`"alclist-item-div${no}"`)
//         itemDiv.classList.add("d-flex")
//         itemDiv.classList.add("flex-row")
//         no++
//         listDiv.appendChild(itemDiv)
//       }
//
//       var div = document.createElement("div")
//       div.classList.add("card")
//       div.classList.add("border-white")
//       div.innerHTML = `
//           <a href="alcoholdetail.html?no=${alcohols[i].no}">
//             <img src="${alcohols[i].img}" class="card-img-top">
//             <div class="card-body">
//               <p class="card-text">
//               <ul>
//                 <li>${alcohols[i].name}</li>
//                 <li>${alcohols[i].degree}%</li>
//               </ul>
//               </p>
//             </div>
//           </a>
//         `
//       itemDiv.appendChild(div)
//
//     }
//
//   })
