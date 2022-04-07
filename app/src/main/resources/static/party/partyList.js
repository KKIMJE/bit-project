var pbody = document.querySelector("#party-body")

  fetch("/party/list")
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {      
      for (var party of result) {
        pbody.innerHTML = `<div class="party-list">
                            <div class="party-body-top">
                                <div class="party-title">${party.title}</div>
                                <div class="party-regdate">${party.regDate}</div>
                            </div>
                            <div class="party-body-content">
                                <div class="leader-profile">
                                    <img class="profile-img leader" src="img/profile_suzy.jpg" alt="방장 프로필">
                                    <span>${Member.writer}</span>
                                </div>
                                <div class="party-detail">
                                    <div class="first-column">
                                        <span>
                                            <i class="fa-solid fa-bottle-droplet"></i>소주</span>
                                        <span>
                                            <i class="fa-solid fa-whiskey-glass"></i>3병 이상</span>
                                    </div>
                                    <div class="second-column">
                                        <span>
                                            <i class="fa-solid fa-calendar-days"></i>3월 3일(목) 23:00</span>
                                        <span>
                                            <i class="fa-solid fa-won-sign"></i>50,000,000,000원</span>
                                    </div>
                                    <div class="third-column">
                                        <span>
                                            <i class="fa-solid fa-user"></i>5명</span>
                                        <span>
                                            <i class="fa-solid fa-store"></i>50m
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="party-body-footer">
                            <div class="party-like">
                                <i class="fa-solid fa-heart like-click"></i>
                                1.3k
                            </div>
                            <div class="party-member-count">
                                <i class="fa-solid fa-user"></i>
                                <span>18</span>&nbsp;/&nbsp;<span>20</span>
                            </div>
                        </div>
                    </div>
        `;
        fbody.appendChild(div);
      }
    });

//     이미지 넣다가 막힘...사진은 어떻게 해야 돼? party 도메인에 없잖아 . -->