// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('978692169dcc813ed6376dfc7bba8b87');
console.log(Kakao.isInitialized());

function sendLink() {
    Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
        title: '딸기케이크',
        description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
        imageUrl:
        'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
        },
    },
    social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
    },
    buttons: [
        {
        title: '웹으로 보기',
        link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
        },
        },
        {
        title: '앱으로 보기',
        link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
        },
        },
    ],
    // 카카오톡 미설치 시 카카오톡 설치 경로이동
    installTalk: true,
    })
}
