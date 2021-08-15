class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read),
      (this.info = function () {
        let hasBeenRead = read ? "read" : "not read yet";
        return `${title} by ${author}, ${pages} pages, ${hasBeenRead}`;
      });
  }
}

let myLibrary = [
  new Book("The Hobbit", "J.R.R Tolkien", 295, false),
  new Book("Book 2", "An Author", 666, true),
];

function addBookToLibrary(array) {
  let container = document.querySelector(".container");

  array.forEach((b) => {
    let card = document.createElement("div");
    card.classList.add("book");
    card.textContent = `${b.title} by ${b.author}, ${b.pages} pages, ${b.read}`;
    container.appendChild(card);
  });
}
addBookToLibrary(myLibrary);

document.querySelector(".newBookBtn").onclick = () => {
  let container = document.querySelector(".container");
  let card = document.createElement("div");
  let b = new Book("test4", "wow", "500", true);
  card.classList.add("book");
  card.textContent = `${b.title} by ${b.author}, ${b.pages} pages, ${b.read}`;
  container.appendChild(card);
};
