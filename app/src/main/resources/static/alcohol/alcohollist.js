const lightBtn = document.querySelector('.category-sort-div');
var listDiv = document.querySelector(".alcohol-list-div")
var itemDiv = document.querySelector(".alclist-item-div")




// function makeItemDiv() {
//     var no = 1
//     var itemDiv = document.createElement("div")
//     itemDiv.classList.add(`"alclist-item-div${no}"`)
//     itemDiv.classList.add("d-flex")
//     itemDiv.classList.add("flex-row")
//     no++
//     listDiv.appendChild(itemDiv)
// }


function allList() {
  fetch("/alcohol/list")
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      for (var i = 0; i < alcohols.length; i++) {
        var div = document.createElement("div")
        div.classList.add("card")
        div.classList.add("border-white")
        div.innerHTML = `
          <a class="alc-link" href="alcoholdetail.html?no=${alcohols[i].alcoholDetailNo}">
            <img src="${alcohols[i].img}" class="card-img-top">
            <div class="card-body">
              <p class="card-text">
              <ul>
                <li>${alcohols[i].alcoholName}</li>
                <li>${alcohols[i].degree}%</li>
              </ul>
              </p>
            </div>
          </a>
        `
        itemDiv.appendChild(div)
      }
    })
}



function targetList(targetNo) {
  fetch("/alcohol/list")
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      var count = 0
      for (var i = 0; i < alcohols.length; i++) {
        if (targetNo == alcohols[i].alcoholTypeNo) {


          var div = document.createElement("div")
          div.classList.add("card")
          div.classList.add("border-white")
          div.innerHTML = `
        <a class="alc-link" href="alcoholdetail.html?no=${alcohols[i].alcoholDetailNo}">
        <img src="${alcohols[i].img}" class="card-img-top">
        <div class="card-body">
        <p class="card-text">
        <ul>
        <li>${alcohols[i].alcoholName}</li>
        <li>${alcohols[i].degree}%</li>
        </ul>
        </p>
        </div>
        </a>
        `
          itemDiv.appendChild(div)
          count++
        }
      }
    })

}






lightBtn.addEventListener("click", function(e) {
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
