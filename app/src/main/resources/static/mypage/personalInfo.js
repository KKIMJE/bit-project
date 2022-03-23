function counter() {
var content = document.getElementById('x-self-intro').value;
if(content.length >300) {
  alert("최대 300자까지 입력 가능합니다.");
  content = content.substring(0,300);
  document.getElementById('x-self-intro').value=content;
}
document.getElementById('count').innerHTML = content.length +'/300자';
}
counter();
function toggleImg() {
    document.getElementById("ig").src = "../img/logo.png";
  }