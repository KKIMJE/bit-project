const lightBtn = document.querySelector('.category-sort-div');

lightBtn.addEventListener("click",function(e){
    if (e.target == e.currentTarget) {
      return;
    } else {
      e.currentTarget.querySelector('.act').classList.toggle('act');
      e.target.classList.toggle('act');
    }
  });



    var alcoholitem = document.querySelector(".alclist-item-div")
    fetch("/alcohol/list")
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(alcohols) {
        console.log(alcohols);
        for (var item of alcohols) {
          alcoholitem.innerHTML = `<a href="alcoholdetail.html">
        <div class="card border border-white">
          <img src="img/alcohol5.png" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">
            <ul>
              <li>좋은데이</li>
              <li>16.9도</li>
            </ul>
            </p>
          </div>
        </div>
      </a>`
        }
      })
