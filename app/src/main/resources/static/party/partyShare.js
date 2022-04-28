/***************
카카오 공유하기
***************/

// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('869ba892f15eedfec5a2c871c6d4a639');
// console.log(Kakao.isInitialized()); 생성 되었으면 true를 반환

function sendLink() {

    let partyTitle = document.querySelector(".party-title").innerHTML;
    console.log(partyTitle);

    let currentlink = document.location.href;

    // console.log(currentlink);
    // console.log(parseInt(storeMnoCnt))
    // console.log(mainImg)

    Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
        title: `${partyTitle}`,
        description: '야술먹자 우리지금만나',
        imageUrl: 'https://image.hmall.com/static/3/9/52/07/2107529361_0.jpg?RS=600x600&AR=0',
        link: {
        mobileWebUrl: currentlink,
        webUrl: currentlink,
        },
    },
    social: {
        // likeCount: `${parseInt(storeMnoCnt)}`,
        // commentCount: 45,
        // sharedCount: 845,
    },
    itemContent: { 
        profileText: `${partyTitle}`,
        profileImageUrl: 'https://image.hmall.com/static/3/9/52/07/2107529361_0.jpg?RS=600x600&AR=0',
    },
    buttons: [
        {
        title: '웹으로 보기',
        link: {
            mobileWebUrl: currentlink,
            webUrl: currentlink,
        },
        },
        // {
        // title: '앱으로 보기',
        // link: {
        //     mobileWebUrl: 'https://developers.kakao.com',
        //     webUrl: 'https://developers.kakao.com',
        // },
        // },
    ],
    // 카카오톡 미설치 시 카카오톡 설치 경로이동
    installTalk: true,
    })
}