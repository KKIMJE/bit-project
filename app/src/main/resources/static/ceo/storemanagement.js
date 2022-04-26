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
        tr.innerHTML = `<td>${store.storeNo}</td>
        <td><a href="/ceo/storeChange.html?no=${store.storeNo}">${store.storeName}</a></td>
        <td>${store.address}</td>
        <td>${store.status}</td>`;
        tbody.appendChild(tr);
      }
    });