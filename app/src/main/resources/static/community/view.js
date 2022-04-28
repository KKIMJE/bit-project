var xCate = document.querySelector(".board-category")
var xTitle = document.querySelector(".write-title")
var xContent = document.querySelector("#summernote")
var categoryNo = xCate.value;

window.onload = function updateForm () {

	var arr = location.href.split("?");
	console.log(arr);
	if (arr.length == 1) {
		alert("요청 형식이 옳바르지 않습니다.")
		throw "URL 형식 오류!";
	} else {
	var qs = arr[1];
	var params = new URLSearchParams(qs);
	var currentBoardNo = params.get("boardNo");

	fetch(`/community/get?no=${currentBoardNo}`)
	.then(function(response) {
		return response.json();
	})
	.then(function(result) {
		xCate.value = sortCategoryByNo(result.communityNo)
		categoryNo = sortCategoryByNo(result.communityNo)
		xTitle.value = result.boardTitle;
		// $('#summernote').summernote('pasteHTML', result.boardContents);
		// $(".note-editable").text(result.boardContents);
		$('#summernote').summernote('code', result.boardContents);

		document.querySelector(".save").addEventListener("click", function()
		{	console.log(categoryNo);
			fetch(`/communityForm/update?boardNo=${result.boardNo}&communityNo=` + sortCategoryByStr(categoryNo) + `&boardTitle=${xTitle.value}&boardContents=${xContent.value}`)
			.then(function (response){
				return response.text()
			})
			.then(function(text) {
				console.log(text);
				location.href = "main.html"
			});

			document.querySelector(".quit").addEventListener("click", function() {
			location.href = `communityDetail.html?boardNo=${result.boardNo}`
			})
		// })
		})


	})
	}
	}

function sortCategoryByStr(category) {
	var a = "술집추천"
	var b = "분실/실종센터"
	var c = "일상"
	var d = "사건사고"
	var f = "기타"

	if (category === a) {
		return 2
	} else if (category === b) {
		return 3
	} else if (category === c) {
		return 4
	} else if (category === d) {
		return 5
	} else if (category === f){
		return 7
	}
}

function sortCategoryByNo(category) {
	var a = 2
	var b = 3
	var c = 4
	var d = 5
	var f = 7

	if (category === a) {
		return "술집추천"
	} else if (category === b) {
		return "분실/실종센터"
	} else if (category === c) {
		return "일상"
	} else if (category === d) {
		return "사건사고"
	} else if (category === f){
		return "기타"
	}
}



// 섬머노트 스마트에디터
$(document).ready(function() {

	$('#summernote').summernote({
    toolbar: [
        //[groupName, [list of button]]
        ['fontname', ['fontname']],
        ['fontsize', ['fontsize']],
        ['style', ['bold', 'italic', 'underline','strikethrough', 'clear']],
        ['color', ['forecolor','color']],
        ['table', ['table']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['insert',['picture','link','video']],
        ['view', ['fullscreen', 'help']]
      ],
      fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New','맑은 고딕','궁서','굴림체','굴림','돋움체','바탕체'],
      fontSizes: ['8','9','10','11','12','14','16','18','20','22','24','28','30','36','50','72'],
		  height: 350,                 // 에디터 높이
		  minHeight: null,             // 최소 높이
		  maxHeight: null,             // 최대 높이
		  focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
		  lang: "ko-KR",					// 한글 설정

			// callbacks: {	//여기 부분이 이미지를 첨부하는 부분
			// 		onImageUpload : function(files) {
			// 			uploadSummernoteImageFile(files[0],this);
			// 		},
			// 		onPaste: function (e) {
			// 			var clipboardData = e.originalEvent.clipboardData;
			// 			if (clipboardData && clipboardData.items && clipboardData.items.length) {
			// 				var item = clipboardData.items[0];
			// 				if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
			// 					e.preventDefault();
			// 				}
			// 			}
			// 		}
			// 	}

	});
});
