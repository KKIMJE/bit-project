var xTitle = document.querySelector(".party-title");

  fetch(`/party/get?no=3`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      console.log(result);
      var party = result;
      // xTitle.innerHTML = party.title;
      // console.log(party.title);
    });