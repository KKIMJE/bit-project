const lightBtn = document.querySelector('.category-sort-div');

lightBtn.addEventListener("click", function(e) {
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act');
    e.target.classList.toggle('act');
  }
});

lightBtn.addEventListener("click", function(e) {
  var alcType = e.target.value

})



var itemDiv = document.querySelector(".alclist-item-div")
var listDiv = document.querySelector(".alcohol-list-div")

fetch("/alcohol/list")
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(alcohols) {
    console.log(alcohols);

    for (var i = 0; i < alcohols.length; i++) {
      if (i % 5 == 0) {
        var no = 1
        var itemDiv = document.createElement("div")
        itemDiv.classList.add(`"alclist-item-div${no}"`)
        itemDiv.classList.add("d-flex")
        itemDiv.classList.add("flex-row")
        no++
        listDiv.appendChild(itemDiv)
      }

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
      itemDiv.appendChild(div)

    }

  })
