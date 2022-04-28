$("#add_tag").click(async function () {
  swal.fire({
      title:  '사장님 가게에 어울리는 태그를 선택하세요',
      input: 'select',
      inputOptions: {
          아늑한: '아늑한',
          역세권: '역세권',
          현지인: '현지인',
          헌팅: '헌팅',
          분위기좋은: '분위기좋은',
          데이트:'데이트',
          가성비:'가성비',
          노래가좋은:'노래가좋은',
          맛난안주:'맛난안주',
          야외:'야외',
          노포:'노포'
      },
      inputPlaceholder: '태그 선택하기',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === '') {
            resolve()
          } else {
            resolve('적어도 하나의 태그를 선택하셔야 합니다 :)')
          }
       })
     }
  })
});

//var xStoreNo = document.querySelector("input[name=storeNo]");
var xStoreName = document.querySelector("input[name=storeName]");
var xAddress = document.querySelector("input[name=address]");
var xAddressDetail = document.querySelector("input[name=addressDetail]"); 
var xOptionDivContainer = document.querySelector("#x-option-div-container");
var xTel = document.querySelector("input[name=tel]");
var xHour = document.querySelector("#hr");
var xIntroduction = document.querySelector("#intro");
var xBusinessRegistrationNo = document.querySelector("input[name=businessRegistrationNo]");
var xReservationAccept = document.querySelector("input[name=reservationAccept]");
var xMaxMember = document.querySelector("input[name=maxMember]");
var xOper = document.querySelector("input[name=oper]");
//var xAddressKakao = document.querySelector("input[name=AddressKakao]");

document.querySelector("#next").onclick = function() {
  if (xStoreName.value == "" ||
    xTel.value == "" ||
    xBusinessRegistrationNo == "" ||
    xIntroduction == "" ||
    xAddress == "" ||
    xHour.value == "") {
    window.alert("필수 입력 항목이 비어 있습니다.")
    return;
  }

var fd = new FormData(document.forms.namedItem("login__form"));

console.log(fd)



      fetch("/store/add", {
        method: "POST",
        body: new URLSearchParams(fd)
      })
      .then(function (response) {
        return response.json()
        })
      .then(function (result) {
        console.log(result);
        if (result.status == "success") {
            console.log("등록 성공")
             alert("성공했습니다")
             window.location.href = "memberBoss2.html";
        } else {
         // window.alert("실패!!")
         console.log(result.data);
        }
        });
};

//document.querySelector("#next").onclick = function() {
  // window.location.href = "memberBoss2.html";
//};

document.querySelector("#exit").onclick = function() {
  // window.location.href = "../ceo/storemanagement.html";
};
