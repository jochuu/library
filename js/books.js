let bookContainer = document.querySelector(".books");

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

Book.prototype.toggleReadStatus = function () {
  if (this.read === true) {
    this.read = false;
  } else {
    this.read = true;
  }
};

function addBookToLibrary(array) {
  bookContainer.textContent = "";

  array.forEach((b, index) => {
    let card = document.createElement("div");
    let title = document.createElement("div");
    let author = document.createElement("div");
    let pages = document.createElement("div");
    let read = document.createElement("div");
    let removeButton = document.createElement("button");

    title.textContent = b.title;
    author.textContent = `by ${b.author}`;
    pages.textContent = `${b.pages} pages`;
    let hasBeenRead = b.read ? "read" : "not read yet";
    read.textContent = hasBeenRead;
    read.onclick = (e) => {
      e.preventDefault();
      b.toggleReadStatus();
      addBookToLibrary(array);
    };

    removeButton.textContent = "delete";
    removeButton.onclick = () => removeBookFromLibrary(array, index);

    card.classList.add("book");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    read.classList.add("read");
    read.classList.add("unselectable");

    card.append(title, author, pages, read, removeButton);
    card.dataset.index = index;
    bookContainer.appendChild(card);
  });
}

function removeBookFromLibrary(array, index) {
  array.splice(index, 1);
  addBookToLibrary(array);
}

document.querySelector(".newBookBtn").onclick = () => {
  let titleTextBox = document.querySelector("#title").value;
  let authorTextBox = document.querySelector("#author").value;
  let pagesTextBox = document.querySelector("#pages").value;
  let readCheckBox = document.querySelector("#read").checked;

  let b = new Book(titleTextBox, authorTextBox, pagesTextBox, readCheckBox);
  myLibrary.push(b);
  addBookToLibrary(myLibrary);
};

addBookToLibrary(myLibrary);
