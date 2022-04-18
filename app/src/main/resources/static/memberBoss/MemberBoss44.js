var xStoreName = document.querySelector("input[name=storeName]");
var xTel = document.querySelector("input[name=tel]");
var xHour = document.querySelector("textarea[name=hour]");
var xIntroduction = document.querySelector("textarea[name=introduction]");

document.querySelector("form[name=login__form]").onsubmit = function() {

  var fd = new FormData(document.forms.namedItem("login__form"));

  fetch("/store/add", { 
      method: "POST",
      body: new URLSearchParams(fd)
    }) 
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(result) {
      console.log(result);
    });
};
    