const lightBtn = document.querySelector('.store-category-sort');

const btn1 = document.querySelector('.store-category-font:nth-child(1)');



lightBtn.addEventListener("click",function(e){
    console.log(e.target); == 전체
});




for(let i = 0; i < lightBtn.length; i++){
    document.querySelector(`.store-category-font:nth-child(${i})`); 
}












btnPush = [];
btnNonPush = [];


// btn1.onclick = function() { // 전체버튼
//     console.log(btn1.getElementsByTagName("button"))
// };




// 함수에 보관
// btn1.addEventListener("click" , (e) => {
//     console.log(e.target)
// })


// btn1.addEventListener("click" , (e) => {
//     console.log(e.target)
// })




lightBtn.forEach(btn => {
    console.log(btn);
});








// while (true) {
//     for (let i = 0; i < lightBtn.length; i++) {
//         catBtn = document.querySelector(`.store-category-font:nth-child(${i})`);
//         catBtn.onclick = function() {
//             console.log("ggggg")
//         }
//     }
// }


function hide(e){
    console.log(e.currentTarget);
    // When this function is used as an event handler: this === e.currentTarget
  }

// boxElem.addEventListener("click", logEvent);
// for (let i = 0; i < lightBtn.length; i++) {
//     document.querySelector(`.store-category-font:nth-child(${i})`);
// }


// btn.onclick = function() {
//     console.log("ggggg")
// };