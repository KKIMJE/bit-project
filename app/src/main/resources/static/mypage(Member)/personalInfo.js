function counter() {
var content = document.getElementById('x-self-intro').value;
if(content.length >300) {
  alert("최대 300자까지 입력 가능합니다.");
  content = content.substring(0,300);
  document.getElementById('x-self-intro').value=content;
} 
//content += "<br>" + content.length + "/300자" ;
// 요기서 textarea 안에 글자 count를 넣어준다. 그런데 textarea안에서 html tag가 동작 안하는 듯...
document.getElementById('x-self-intro').innerHTML = content + "\n" + content.length+"/300자";
  document.getElementById('count').innerHTML = content.length +'/300자';
 //document.getElementById('x-self-intro').style.textAlign = "right";
  
}
counter();
function toggleImg() {
    document.getElementById("ig").src = "../img/logo.png";
  }