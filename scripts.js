let myLibrary = [];
let bookID = 0;

const submitBtn = document.querySelector("#submitBtn");
const addBtn = document.querySelector("#addBtn");
const formContainer = document.querySelector("#formContainer");
const bookForm = document.querySelector("#bookForm");
const bookContainer = document.querySelector("#bookContainer");

let bookFormEnable = false;

window.addEventListener("keydown", (e) => {
  if (bookFormEnable) {
    if (e.key === "Enter") {
      addBookToLibrary();
    }
  }
});

addBtn.addEventListener("click", (e) => {
  if (!bookFormEnable) {
    showForm();
  }
});

class Book {
  constructor(id, title, author, pages, read, rating) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.rating = rating;
  }

  displayInfo() {
    const bookCard = document.createElement("div");
    bookCard.setAttribute("class", "bookCard");
    bookContainer.appendChild(bookCard);

    const titleDisplay = document.createElement("p");
    const userTitle = document.createElement("span");
    userTitle.setAttribute("class", "spans");
    titleDisplay.textContent = `Title: `;
    bookCard.appendChild(titleDisplay);
    titleDisplay.appendChild(userTitle);
    userTitle.textContent = `${this.title}`;

    const authorDisplay = document.createElement("p");
    authorDisplay.textContent = `Author: `;
    bookCard.appendChild(authorDisplay);
    const userAuthor = document.createElement("span");
    authorDisplay.appendChild(userAuthor);
    userAuthor.setAttribute("class", "spans");
    userAuthor.textContent = `${this.author}`;

    const pagesDisplay = document.createElement("p");
    pagesDisplay.textContent = `Pages: `;
    bookCard.appendChild(pagesDisplay);
    const userPages = document.createElement("span");
    pagesDisplay.appendChild(userPages);
    userPages.setAttribute("class", "spans");
    userPages.textContent = `${this.pages}`;

    const readDisplay = document.createElement("p");
    readDisplay.setAttribute("id", "readDisplay");
    readDisplay.textContent = `Read: `;
    bookCard.appendChild(readDisplay);
    const userRead = document.createElement("span");
    readDisplay.appendChild(userRead);
    userRead.setAttribute("class", "spans");
    userRead.textContent = `${this.read}`;

    const ratingDisplay = document.createElement("p");
    ratingDisplay.textContent = `Rating: `;
    bookCard.appendChild(ratingDisplay);
    const userRating = document.createElement("span");
    ratingDisplay.appendChild(userRating);
    userRating.setAttribute("class", "spans");
    userRating.textContent = `${this.rating} / 10`;

    const readButton = document.createElement("button");
    readButton.setAttribute("class", "deleteBtn");
    readButton.textContent = "Change read status";
    readButton.addEventListener("click", this.changeRead);

    bookCard.appendChild(readButton);
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "deleteBtn");
    deleteButton.textContent = "Delete book";
    bookCard.appendChild(deleteButton);
    deleteButton.addEventListener("click", this.deleteBook);
  }

  deleteBook() {
    const before = myLibrary.slice(0, this.id);
    const after = myLibrary.slice(this.id + 1);
    myLibrary = before.concat(after);
    bookContainer.removeChild(this.parentElement);
  }

  changeRead() {
    if (this.read === "Yes") {
      this.read = "No";
    } else {
      this.read = "Yes";
    }

    const readDisplay = this.parentElement.querySelector(":nth-Child(4)");
    readDisplay.textContent = `Read: `;

    const userRead = document.createElement("span");
    readDisplay.appendChild(userRead);
    userRead.setAttribute("class", "spans");
    userRead.textContent = `${this.read}`;
  }
}

function showForm() {
  const bookForm = document.createElement("form");
  bookForm.setAttribute("id", "bookForm");

  const field = document.createElement("fieldset");
  field.setAttribute("class", "fieldSet");

  const title = document.createElement("input");
  title.setAttribute("class", "formInput");
  title.setAttribute("id", "title");
  title.setAttribute("type", "text");
  title.setAttribute("placeholder", "Book title");
  title.required = true;

  const author = document.createElement("input");
  author.setAttribute("class", "formInput");
  author.setAttribute("id", "author");
  author.setAttribute("type", "text");
  author.setAttribute("placeholder", "Book author");
  author.required = true;

  const pages = document.createElement("input");
  pages.setAttribute("class", "formInput");
  pages.setAttribute("id", "pages");
  pages.setAttribute("type", "tel");
  pages.setAttribute("placeholder", "Number of pages");
  pages.setAttribute("min", "1");
  pages.required = true;

  const rating = document.createElement("input");
  rating.setAttribute("class", "formInput");
  rating.setAttribute("id", "rating");
  rating.setAttribute("type", "number");
  rating.setAttribute("placeholder", "Rating out of 10");
  rating.setAttribute("min", "0");
  rating.setAttribute("max", "10");
  rating.required = true;

  const readQ = document.createElement("p");
  readQ.textContent = "Have you read the book?";

  const readQDiv = document.createElement("p");
  readQDiv.setAttribute("class", "readQDiv");

  const radio1Div = document.createElement("div");

  const readRadio1 = document.createElement("input");
  readRadio1.setAttribute("id", "readYes");
  readRadio1.setAttribute("type", "radio");
  readRadio1.setAttribute("name", "radioInput");
  readRadio1.setAttribute("value", "Yes");
  readRadio1.setAttribute("checked", "checked");

  const readLabel1 = document.createElement("label");
  readLabel1.setAttribute("for", "readYes");
  readLabel1.textContent = "Yes";

  const radio2Div = document.createElement("div");

  const readRadio2 = document.createElement("input");
  readRadio2.setAttribute("id", "readNo");
  readRadio2.setAttribute("type", "radio");
  readRadio2.setAttribute("name", "radioInput");
  readRadio2.setAttribute("value", "No");

  const readLabel2 = document.createElement("label");
  readLabel2.setAttribute("for", "readNo");
  readLabel2.textContent = "No";

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("class", "bookAdder");
  submitBtn.setAttribute("id", "submitBtn");
  submitBtn.setAttribute("type", "button");
  submitBtn.textContent = "Add a book";
  submitBtn.setAttribute("onclick", "validateInput()");

  formContainer.appendChild(bookForm);
  bookForm.appendChild(field);
  field.appendChild(title);
  field.appendChild(author);
  field.appendChild(pages);
  field.appendChild(rating);
  field.appendChild(readQ);
  field.appendChild(readQDiv);
  readQDiv.appendChild(radio1Div);
  readQDiv.appendChild(radio2Div);
  radio1Div.appendChild(readRadio1);
  radio1Div.appendChild(readLabel1);
  radio2Div.appendChild(readRadio2);
  radio2Div.appendChild(readLabel2);
  field.appendChild(submitBtn);

  submitBtn.addEventListener("click", (e) => {
    addBookToLibrary();
  });

  bookFormEnable = true;
}

function addBookToLibrary() {
  const id = bookID;
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const radioButtons = document.querySelectorAll("input[name=radioInput]");
  const rating = document.querySelector("#rating").value;
  let readStatus;

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      readStatus = radioButton.value;
      break;
    }
  }

  const userBook = new Book(id, title, author, pages, readStatus, rating);
  myLibrary.push(userBook);
  bookID++;
  //My initial design was to add each book to the DOM as the book object is added to the myLibary
  //to the myLibary array, but I'm going to clear them each time and add them by looping through the library
  //to satisfy the instructions on the Odin project.

  //clear bookContainer
  const bookContainer = document.querySelector("#bookContainer");
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.lastChild);
  }

  //add all books in myLibrary
  for (const book of myLibrary) {
    book.displayInfo();
  }

  // userBook.displayInfo();
  const bookForm = document.querySelector("#bookForm");
  formContainer.removeChild(bookForm);
  bookFormEnable = false;
}

function validateInput() {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const pagesInput = document.getElementById('pages');
  const ratingInput = document.getElementById('rating');

}
