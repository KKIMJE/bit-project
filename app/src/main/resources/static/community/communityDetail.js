var xTitle = document.querySelector(".community-title");

  fetch(`/community/get?no=3`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      console.log(result);
      var community = result;
      // xTitle.innerHTML = community.title;
      // console.log(community.title);
    });
