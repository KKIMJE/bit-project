const lightBtn = document.querySelectorAll('.store-category-sort');
const btn = document.querySelector('.store-category-font:nth-child(3)');




lightBtn.forEach(btn => {
    console.log(btn);
});


for (let i = 0; i < lightBtn.length; i++) {
    document.querySelector(`.store-category-font:nth-child(${i})`);

}


btn.onclick = function() {
    console.log("ggggg")
};