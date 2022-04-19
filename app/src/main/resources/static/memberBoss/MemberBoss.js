
  $("#add_tag").click(async function () {
    const { value: 태그 } = await Swal.fire({
      title: '사장님 가게에 어울리는 태그를 선택하세요',
      input: 'select',
      inputOptions: {
        '태그선택': {
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
      inputPlaceholder: '태그 선택하기',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'oranges') {
            resolve()
          } else {
            resolve('적어도 하나의 태그를 선택하셔야 합니다 :)')
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
      if (result.status == "success") {
        alert("성공했습니다")
      } else {
        window.alert("실패!!");
      }
    });
  
          
    document.querySelector("#exit").onclick = function() {
      window.location.href = "../ceo/storemanagement.html";
    };

  }

      