let myLibrary = [];
let bookID = 0;

const submitBtn = document.querySelector("#submitBtn");
const addBtn = document.querySelector('#addBtn');
const formContainer = document.querySelector('#formContainer');
const bookForm = document.querySelector('#bookForm');
const bookContainer = document.querySelector("#bookContainer");

let bookFormEnable = false;

window.addEventListener('keydown', (e) => {
    if (bookFormEnable) {
        if (e.key === 'Enter') {
            addBookToLibrary();
        }
    }
});

addBtn.addEventListener('click', (e) => {
    if (!bookFormEnable) {
        showForm();
    }

});

function Book(id, title, author, pages, read, rating) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.rating = rating;

    let haveRead;
    if (read) {
        haveRead = "Yes";
    } else {
        haveRead = "No";
    }


    this.displayInfo = function () {
        const bookCard = document.createElement('div');
        bookCard.setAttribute("class", "bookCard");
        bookContainer.appendChild(bookCard);
        const titleDisplay = document.createElement('p');
        titleDisplay.textContent = `Title: ${title}`;
        bookCard.appendChild(titleDisplay);
        const authorDisplay = document.createElement('p');
        authorDisplay.textContent = `Author: ${author}`;
        bookCard.appendChild(authorDisplay);
        const pagesDisplay = document.createElement('p');
        pagesDisplay.textContent = `Pages: ${pages}`;
        bookCard.appendChild(pagesDisplay);
        const readDisplay = document.createElement('p');
        readDisplay.setAttribute('id', 'readDisplay');
        readDisplay.textContent = `Read: ${read}`;
        bookCard.appendChild(readDisplay);
        const ratingDisplay = document.createElement('p');
        ratingDisplay.textContent = `Rating: ${5} stars`;
        bookCard.appendChild(ratingDisplay);
        const readButton = document.createElement('button');
        readButton.setAttribute('class', 'deleteBtn');
        readButton.textContent = 'Change read status';
        readButton.addEventListener('click', this.changeRead);
        bookCard.appendChild(readButton);
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'deleteBtn');
        deleteButton.textContent = 'Delete book';
        bookCard.appendChild(deleteButton);
        deleteButton.addEventListener('click', this.deleteBook);

        // bookInfo = "Title: " + title + "Author: " + author + "Pages: " + pages + "Read: " + haveRead;
        // return bookInfo;
    }

    this.changeRead = function () {
        if (read === 'Yes') {
            read = 'No';
        } else {
            read = 'Yes';
        }
        const readDisplay = document.querySelector('#readDisplay');
        readDisplay.textContent = `Read: ${read}`;
    }

    this.deleteBook = function () {
        const before = myLibrary.slice(0, id);
        const after = myLibrary.slice(id + 1);
        myLibrary = before.concat(after);
        bookContainer.removeChild(this.parentElement);
    }
}

function showForm() {

    const bookForm = document.createElement('form');
    bookForm.setAttribute("id", "bookForm");

    const field = document.createElement('fieldset');
    field.setAttribute('class', 'fieldSet');

    const title = document.createElement('input');
    title.setAttribute("id", "title");
    title.setAttribute("type", "text");
    title.setAttribute("placeholder", "Enter book title");

    const author = document.createElement('input');
    author.setAttribute("id", "author");
    author.setAttribute("type", "text");
    author.setAttribute("placeholder", "Enter book author");

    const pages = document.createElement('input');
    pages.setAttribute("id", "pages");
    pages.setAttribute("type", "tel");
    pages.setAttribute("placeholder", "Enter number of pages");

    const readQ = document.createElement('p');
    readQ.textContent = "Have you read the book?";

    const radio1Div = document.createElement('div');

    const readRadio1 = document.createElement('input');
    readRadio1.setAttribute("id", "readYes");
    readRadio1.setAttribute("type", "radio");
    readRadio1.setAttribute("name", "radioInput");
    readRadio1.setAttribute("value", "Yes");
    readRadio1.setAttribute("checked", "checked");

    const readLabel1 = document.createElement('label');
    readLabel1.setAttribute("for", "readYes");
    readLabel1.textContent = 'Yes';

    const radio2Div = document.createElement('div');

    const readRadio2 = document.createElement('input');
    readRadio2.setAttribute("id", "readNo");
    readRadio2.setAttribute("type", "radio");
    readRadio2.setAttribute("name", "radioInput");
    readRadio2.setAttribute("value", "No");

    const readLabel2 = document.createElement('label');
    readLabel2.setAttribute("for", "readNo");
    readLabel2.textContent = 'No';

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.setAttribute("type", "button");
    submitBtn.textContent = 'Add a book';

    formContainer.appendChild(bookForm);
    bookForm.appendChild(field);
    field.appendChild(title);
    field.appendChild(author);
    field.appendChild(pages);
    field.appendChild(readQ);
    field.appendChild(radio1Div);
    radio1Div.appendChild(readRadio1);
    radio1Div.appendChild(readLabel1);
    field.appendChild(radio2Div);
    radio2Div.appendChild(readRadio2);
    radio2Div.appendChild(readLabel2);
    field.appendChild(submitBtn);

    submitBtn.addEventListener('click', (e) => {
        addBookToLibrary();
    });

    bookFormEnable = true;

}

function addBookToLibrary() {
    const id = bookID;
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const radioButtons = document.querySelectorAll('input[name=radioInput');

    let readStatus;

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            readStatus = radioButton.value;
            break;
        }
    }

    console.log(readStatus);
    const userBook = new Book(id, title, author, pages, readStatus);
    myLibrary.push(userBook);
    bookID++;
    userBook.displayInfo();
    const bookForm = document.querySelector('#bookForm');
    formContainer.removeChild(bookForm);
    bookFormEnable = false;
}
