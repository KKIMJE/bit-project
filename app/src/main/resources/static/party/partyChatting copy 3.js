// URL에서 쿼리스트링(query string)을 추출한다.
var arr = location.href.split("?"); 

if (arr.length == 1) {
    alert("요청 형식이 올바르지 않습니다.")
    throw "URL 형식 오류!";
}

var qs = arr[1];

// 쿼리 스트링에서 모임번호 값을 추출한다.
var params = new URLSearchParams(qs);
var pno = params.get("pno");

if (pno == null) {
    alert("게시물 번호가 없습니다.");
    throw "파라미터 오류!";
}


const Chat = (function(){
    
    fetch("/member/get").then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (result) {
    return result.data.nickName;
    })

    const uNickname = () => {
        return new Promise((resolve) => {
            fetch("/member/get")
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
            resolve(result.data.nickName)
        })
    })
}

let myName;

(async () => {
    try {
        myName = await uNickname()
        console.log(myName);
    } catch (e) {
        console.log(e);
    }
})();


    fetch(`/partyBoard/get?pno=${pno}`, {
        method: "GET"
    }).then(function(response) {
        //console.log("리스트 불러와줘")
        console.log(response);
        return response.json();
    }).then(function(result) {      
        for (let chat of result) {
            let listData = {
            "senderName"  : `${chat.sender.nickName}`,
            "message"     : `${chat.message}`
        }
            //console.log(listData)
            receive(listData);
        }
    })
    
    
    // init 함수
    function init() {
        // enter 키 이벤트
        $(document).on('keydown', 'div.input-div textarea', function(e){ // keydown: 키보드를 누를 때 실행. 키를 누르고 있을 때 단 한번만 실행
            if(e.keyCode == 13 && !e.shiftKey) { // keyCode: 13 -> enter // !e.shiftKey : shift 키가 눌리지 않았으면
                e.preventDefault();  // a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행됩니다. preventDefault 를 통해 이러한 동작을 막아줄 수 있습니다.
                
                const message = $(this).val();
                
                // 메시지 전송
                sendMessage(message);
                // 입력창 clear
                clearTextarea();
            }
        });
    }
    
    // 메시지 태그 생성
    function createMessageTag(LR_className, senderName, message) {
        // 형식 가져오기
        let chatLi = $('div.chat.format ul li').clone();

        // 값 채우기
        chatLi.addClass(LR_className);
        chatLi.find('.sender span').text(senderName);
        chatLi.find('.message span').text(message);

        return chatLi;
    }


    // 메시지 태그 append
    function appendMessageTag(LR_className, senderName, message) {
        const chatLi = createMessageTag(LR_className, senderName, message);

        $('div.chat:not(.format) ul').append(chatLi);  // 필터셀렉터 - : 콜론을 포함하는 셀렉터

        // 스크롤바 아래 고정
        $('div.chat').scrollTop($('div.chat').prop('scrollHeight')); // $('').scrollTop() : 선택한 요소의 스크롤바 수직 위치를 가져온다. // $(ele).prop('scrollHeight') : scroll되어 나타나는 부분까지 높이를 반환합니다. // .prop() 메서드는 JavaScript 요소의 속성 값을 설정하거나 반환합니다. // scrollHeight : 요소에 들어있는 컨텐츠의 전체 높이
    }


    // 메시지 전송
    function sendMessage(message) {
        const data = {
            "senderName"  : "개코",
            "message"     : message,
            "pno"         : pno
        }
        fetch(`/partyBoard/add?message=${message}&pno=${pno}`, {
            method: "POST"
        }).then(function(response) {
            console.log(response)
            return response.json()
        }).then(function(result) {
            console.log("채팅 add")
        })

        // 통신하는 기능이 없으므로 여기서 receive
        receive(data);
    }

    // 메시지 입력박스 내용 지우기
    function clearTextarea() {
        $('div.input-div textarea').val('');
    }

    // 메시지 수신
    function receive(data) {
        const LR = (data.senderName != myName)? "left" : "right";
        appendMessageTag("right", data.senderName, data.message);
    }

    return {
        'init': init
    };
})();


$(function(){ // html 문서가 로딩되면 chat의 init 함수를 호출하라
    Chat.init();
});