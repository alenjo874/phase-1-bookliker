fetch("http://localhost:3000/books")
  .then((res) => res.json())
  .then((books) => listBookNames(books));

const bookList = document.querySelector("#list");
const clickBookShow = document.querySelector("#show-panel");

function listBookNames(books) {
  books.forEach((book) => {
    const liTag = document.createElement("li");

    liTag.textContent = book.title;
    liTag.addEventListener("click", function () {
      let likeCount = 0;
      clickBookShow.innerHTML = `
        <img src="${book.img_url}" >
        <p><b>${book.title}</b></p>
        <p><b>${book.subtitle}</b></p>
        <p><b>${book.author}</b></p>

        <p>${book.description}</p>
        <ul>
        <li id="likeCount">${likeCount}</li>
        </ul>
        <button id="like">LIKE </button>
        `;
      likeButton = document.querySelector("#like");
      likeButton.addEventListener("click", function () {
        likeCount++;
        document.querySelector("#likeCount").textContent = likeCount;
      });
    });

    bookList.append(liTag);
  });
}
