var pbody = document.querySelector("#party-body")

  fetch("/party/list")
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {      
      for (var party of result) {
        pbody.innerHTML += `<div class="party-list">
                            <div class="party-body-top">
                                <div class="party-title">${party.title}</div>
                                <div class="party-regdate">${party.regDate}</div>
                            </div> 
                            <div class="party-body-content">
                                <div class="leader-profile">
                                    <img class="profile-img leader" src="img/profile_suzy.jpg" alt="방장 프로필">
                                    <span>${party.name}</span>
                                </div>
                                <div class="party-detail">
                            <div class="first-row">
                                <i class="fa-solid fa-calendar-days"></i>
                                <span>${party.meetingDate}</span>
                            </div>
                            <div class="second-row">
                                <div>
                                    <span>
                                        <i class="fa-solid fa-bottle-droplet"></i>${party.alcoholType}</span>
                                </div>
                                <div>
                                    <span>
                                        <i class="fa-solid fa-whiskey-glass"></i>${party.alcoholLimit}</span>
                                </div>
                                <div>
                                    <span>
                                        <i class="fa-solid fa-won-sign"></i>${party.partyFee}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="party-body-footer">
                        <div class="party-store">
                            <span>50m</span>
                        </div>
                        <div class="party-like">
                            <i class="fa-solid fa-heart like-click"></i>
                            1.3k
                        </div>
                        <div class="party-member-count">
                            <i class="fa-solid fa-user"></i>
                            <span>3</span>&nbsp;/&nbsp;<span>${party.maxMember}</span>
                        </div>
                    </div>
                </div>
        `;
        
      }
      pbody.appendChild(div);
    });

//     이미지 넣다가 막힘...사진은 어떻게 해야 돼? party 도메인에 없잖아 . -->