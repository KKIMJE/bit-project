const lightBtn = document.querySelector('.category-sort-div');

lightBtn.addEventListener("click", function(e) {
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act');
    e.target.classList.toggle('act');
  }
});



var alcoholitem = document.querySelector(".alclist-item-div1")
var alcoholitem2 = document.querySelector(".alclist-item-div2")
fetch("/alcohol/list")
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(alcohols) {
    console.log(alcohols);
    for (var i = 0; i < alcohols.length; i++) {
      if (i > 5) {
        alcoholitem2.appendChild(div)
      }
      if (i > 9) {
        return
      }
      // console.log(item.name);
      var div = document.createElement("div")
      div.classList.add("card")
      div.classList.add("border-white")
      div.innerHTML = `
          <a href="alcoholdetail.html?no=${alcohols[i].no}">
            <img src="${alcohols[i].img}" class="card-img-top">
            <div class="card-body">
              <p class="card-text">
              <ul>
                <li>${alcohols[i].name}</li>
                <li>${alcohols[i].degree}%</li>
              </ul>
              </p>
            </div>
          </a>
        `
      alcoholitem.appendChild(div)

    }
  })
