// URL에서 쿼리스트링(query string)을 추출한다.
var arr = location.href.split("?"); 

if (arr.length == 1) {
    alert("해당 모임이 존재하지 않습니다.")
    throw "URL 형식 오류!";
}

var qs = arr[1];

// 쿼리 스트링에서 모임번호 값을 추출한다.
var params = new URLSearchParams(qs);
var roomNum = params.get("roomNum");
var username = params.get("username");

if (roomNum == null) {
    alert("해당 모임이 존재하지 않습니다.");
    throw "파라미터 오류!";
}

//--------------------------여기에 채팅방 제목 넣기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//document.querySelector("#username").innerHTML = username;
document.querySelector("#username").innerHTML = "임시 채팅방 제목";



// SSE 연결하기
const eventSource = new EventSource(`/chat/roomNum/${roomNum}`);
eventSource.onmessage = (event) => { 
	const data = JSON.parse(event.data); // 파싱해서 js object로 변형했다.
	if (data.sender === username) { // 로그인한 유저가 보낸 메시지(내가 보낸 것)
		console.log(data.sender)

		// 파란박스(오른쪽) // 나
		initMyMessage(data);
	} else {
		// 회색박스(왼쪽) // 다른 사람들
		initYourMessage(data);
	}
}

// 파란박스 만들기
function getSendMsgBox(data) {

	let md = data.createdAt.substring(5, 10)
	let tm = data.createdAt.substring(11, 16)
	convertTime = tm + " | " + md

	return `<div class="sent_msg">
	<p>${data.msg}</p>
	<span class="time_date"> ${convertTime} / <b>${data.sender}</b> </span>
</div>`;
}

// 회색박스 만들기
function getReceiveMsgBox(data) {

	let md = data.createdAt.substring(5, 10)
	let tm = data.createdAt.substring(11, 16)
	convertTime = tm + " | " + md

	return `<div class="received_withd_msg">
	<p>${data.msg}</p>
	<span class="time_date"> ${convertTime} / <b>${data.sender}</b> </span>
</div>`;
}

// 최초 초기화될 때 1번방 3건이 있으면 3건을 다 가져와요
// addMessage() 함수 호출시 DB에 insert 되고, 그 데이터가 자동으로 흘러들어온다(SSE)
// 파란박스 초기화하기
function initMyMessage(data) {
	let chatBox = document.querySelector("#chat-box");

	let sendBox = document.createElement("div");
	sendBox.className = "outgoing_msg";

	sendBox.innerHTML = getSendMsgBox(data);
	chatBox.append(sendBox);

	document.documentElement.scrollTop = document.body.scrollHeight;
}

// 회색박스 초기화하기
function initYourMessage(data) {
	let chatBox = document.querySelector("#chat-box");

	let receivedBox = document.createElement("div");
	receivedBox.className = "received_msg";

	receivedBox.innerHTML = getReceiveMsgBox(data);
	chatBox.append(receivedBox);

	document.documentElement.scrollTop = document.body.scrollHeight;
}

// AJAX 채팅 메시지를 전송
async function addMessage() {
	let msgInput = document.querySelector("#chat-outgoing-msg");

	let chat = {
		sender: username,
		roomNum: roomNum,
		msg: msgInput.value
	};

	fetch("/chat", {
		method: "post", //http post 메서드 (새로운 데이터를 write)
		body: JSON.stringify(chat), // JS -> JSON(이렇게 바꿔야 body로 전송할 수 있다.)
		headers: {
			"Content-Type": "application/json; charset=utf-8"
		}
	});

	msgInput.value = "";
}

// 버튼 클릭시 메시지 전송
document.querySelector("#chat-outgoing-button").addEventListener("click", () => {
	addMessage();
});

// 엔터를 치면 메시지 전송
document.querySelector("#chat-outgoing-msg").addEventListener("keydown", (e) => {
	if (e.keyCode === 13) {
		addMessage();
	}
});