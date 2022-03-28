  var tbody = document.querySelector("#x-book-table tbody")

  fetch("/book/list")
    .then(function(response) {
      return response.json();
    })
    .then(function(books) {
      for (var book of books) {
        if (book.photo == null) {
        	book.photo = "default.jpg";
        }
        var tr = document.createElement("tr");
        tr.innerHTML = `<td>${book.no}</td>
        <td><a href="view.html?no=${book.no}">
          <div class="x-photo-box"><img src="photo?filename=50x50_${book.photo}"></div>
          ${book.title}
        </a></td>
        <td>${book.author}</td>
        <td>${book.press}</td>
        <td>${book.page}</td>`;
        tbody.appendChild(tr);
      }
    });