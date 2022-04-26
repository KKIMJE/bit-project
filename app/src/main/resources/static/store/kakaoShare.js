// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('978692169dcc813ed6376dfc7bba8b87');
// console.log(Kakao.isInitialized());

function sendLink() {
    let storeName = document.querySelector(".storeName").innerHTML
    let storeTag = document.querySelector(".storeTag").innerHTML
    let storeMnoCnt = document.querySelector(".storeMnoCnt").innerHTML.slice(-1) // 좋아요 수
    let mainImg = document.querySelector(".xMain-img").getAttribute('src')
    mainImg = 'http:/' + mainImg.slice(2,mainImg.length)

    let currentlink = document.location.href;

    // console.log(currentlink);
    // console.log(parseInt(storeMnoCnt))
    // console.log(mainImg)

    Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
        title: `${storeName}`,
        description: `${storeTag.slice(35,storeTag.length)}`,
        imageUrl: mainImg,
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
        profileText: `${storeName}`,
        profileImageUrl: mainImg,
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
