  var tbody = document.querySelector("#x-store-table tbody")

  fetch("/store/list")
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      if (result.status == "fail") {
        window.alert("서버 요청 오류!");
        console.log(result.data);
        return;
      }
      
      for (var store of result.data) {
        var tr = document.createElement("tr");
       // var oper = "영업중";
        if( store.oper == true )oper= "영업중";
        else if( store.oper == false )oper= "종료";
        tr.innerHTML = `<td>${store.storeNo}</td>
        <td style="font-weight:bold;"><a href="/ceo/storeChange.html?no=${store.storeNo}">${store.storeName}</a></td>
        <td>${store.address} ${store.addressDetail}</td>
        <td>${oper}</td>`;
        tbody.appendChild(tr);
      }
    });