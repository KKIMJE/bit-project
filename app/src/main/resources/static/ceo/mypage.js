$().ready(function() {
    $("#management-btn").click(function () {
                Swal.fire({
                    icon: 'warning',
                    text: '선택해주세요!',
                    showDenyButton:true,
                    showCancelButton:true,
                    confirmButtonColor:'#90d483',
                    denyButtonColor:'#90d483',
                    ButtonColor:'#90d483',
                    cancelButtonColor: '#90d483',
                    confirmButtonText:`오자네왔능가`,
                     denyButtonText:`치킨데이`,
                   cancelButtonText:`확인`
                }).then((result) => {
                  if(result.isConfirmed) {
                   location.href = "/";
                  }else {
                    location.href="/ceo/mypage.html"
                  }
                })
            });
        });