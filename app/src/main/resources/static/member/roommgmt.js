// category-tab
const lightBtn = document.querySelector('.roomlist-category-sort');
lightBtn.addEventListener("click",function(e){
  if (e.target == e.currentTarget) {
    return;c
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act');
    e.target.classList.toggle('act');
  }
});

//next, pre button
const next = document.querySelector('.next');
const pre = document.querySelector('.previous');


$('#enter').click(function() {
  location.href = "/party/partyChatting.html?pno=58"
})

// $().ready(function() {
//     $("#enter").click(function () {
//                 Swal.fire({
//                     icon: 'warning',
//                     text: '선택해주세요!',
//                     showDenyButton:true,
//                     showCancelButton:true,
//                     confirmButtonColor:'#90d483',
//                     denyButtonColor:'#90d483',
//                     ButtonColor:'#90d483',
//                     cancelButtonColor: '#90d483',
//                     confirmButtonText:`오자네왔능가`,
//                      denyButtonText:`치킨데이`,
//                    cancelButtonText:`확인`
//                 }).then((result) => {
//                   if(result.isConfirmed) {
//                    location.href = "/";
//                   }else {
//                     location.href="/ceo/mypage.html"
//                   }
//                 })
//             });
//         });