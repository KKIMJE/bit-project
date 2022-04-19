$().ready(function () {
  $("#add_tag").click(function () {
    const { value: fruit } = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions: {
        'Fruits': {
           apples: 'Apples',
           bananas: 'Bananas',
           grapes: 'Grapes',
           oranges: 'Oranges'
        },
        'Vegetables': {
           potato: 'Potato',
           broccoli: 'Broccoli',
           carrot: 'Carrot'
        },
        'icecream': 'Ice cream'
      },
      inputPlaceholder: 'Select a fruit',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'oranges') {
            resolve()
          } else {
            resolve('You need to select oranges :)')
          }
        })
      }
    })

    if (fruit) {
      Swal.fire(`You selected: ${fruit}`)
    }
  })
  
   
  var xStoreName = document.querySelector("input[name=storeName]");
  var xTel = document.querySelector("input[name=tel]");
  var xHour = document.querySelector("textarea[name=hour]");
  var xIntroduction = document.querySelector("textarea[name=introduction]");
      

  document.querySelector("form[name=login__form]").onsubmit = function() {
    /*if(xNam.value == ""  
         xEmail.value == "" 
         xPassword.value == "") {
         window.alert("필수 입력 항목이 비어 있습니다.");
          return false;
         }*/

  var fd = new FormData(document.forms.namedItem("login__form"));
    fetch("/store/add",{ 
      method: "POST",
      body: new URLSearchParams(fd)
    }) 
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(result) {
      console.log(result);
        /* if (result.status == "success") {
           alert("성공했습니다")
            } else {
              window.alert("실패!!");
            }*/
    });
  
          
    document.querySelector("#exit").onclick = function() {
    window.location.href = "../ceo/storemanagement.html";
    };

      