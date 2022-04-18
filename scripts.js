let myLibrary = [];
let bookID = 0;

const submitBtn = document.querySelector("#submitBtn");
const addBtn = document.querySelector('#addBtn');
const formContainer = document.querySelector('#formContainer');
const bookForm = document.querySelector('#bookForm');
const bookContainer = document.querySelector("#bookContainer");

let bookFormEnable = false;

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addBookToLibrary();
    }
});

addBtn.addEventListener('click', (e) => {
    if (!bookFormEnable) {
        showForm();
    }

});

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.displayInfo = function () {
        let bookInfo = "";
        const bookCard = document.createElement('div');
        bookCard.setAttribute("class", "bookCard");
        bookContainer.appendChild(bookCard);
        const titleDisplay = document.createElement('p');
        titleDisplay.textContent = `Title: ${title}`;
        const authorDisplay = document.createElement('p');
        authorDisplay.textContent = `Author: ${author}`;
        const pagesDisplay = document.createElement('p');
        pagesDisplay.textContent = `Pages: ${pages}`;
        const readDisplay = document.createElement('p');
        readDisplay.textContent = `Read: ${read}`;
        bookCard.appendChild(titleDisplay);
        bookCard.appendChild(authorDisplay);
        bookCard.appendChild(pagesDisplay);
        bookCard.appendChild(readDisplay);


        let haveRead;
        if (read) {
            haveRead = "Read";
        } else {
            haveRead = "Not read";
        }
        bookInfo = "Title: " + title + "Author: " + author + "Pages: " + pages + "Read: " + haveRead;
        // return bookInfo;
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

    const read = document.createElement('input');
    read.setAttribute("id", "read");
    read.setAttribute("type", "text");
    read.setAttribute("placeholder", "Have you read the book?");

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.setAttribute("type", "button");
    submitBtn.textContent = 'Add a book';

    formContainer.appendChild(bookForm);
    bookForm.appendChild(field);
    field.appendChild(title);
    field.appendChild(author);
    field.appendChild(pages);
    field.appendChild(read);
    field.appendChild(submitBtn);

    submitBtn.addEventListener('click', (e) => {
        addBookToLibrary();
    });

    bookFormEnable = true;

}

function addBookToLibrary() {
    const inputsArr = Array.from(document.querySelectorAll('#bookForm')[0]);
    const id = bookID;
    const title = inputsArr[1].value;
    const author = inputsArr[2].value;
    const pages = inputsArr[3].value;
    const read = inputsArr[4].value;
    const userBook = new Book(id, title, author, pages, read);
    myLibrary.push(userBook);
    bookID++;
    userBook.displayInfo();
    // bookForm.reset();
    const bookForm = document.querySelector('#bookForm');
    formContainer.removeChild(bookForm);
    bookFormEnable = false;
}






function removeBookFromLibrary() {
    //  e.parentElement.removeChild(e);
}





// const hobbit = new Book('The Bible', 'God', 15405, true);
// hobbit.info();

// function addBookToLibrary(book) {
//     let inputs = document.querySelector('#bookForm');
//     let myBook = [];
//     let text = "";
//     for (let i = 0; i < inputs.length - 1; i++) {
//         myBook.push(inputs.elements[i].value);
//     }
//     console.log(myBook);

//     const userBook = new Book(...myBook);

//     myLibrary.push(userBook);

//     console.log(myLibrary);
//     displayBook(userBook);
//     bookCard
//     //document.querySelector('#bookDisplay').textContent = bookInfo;
// }



// function userInput() {
//     let str = document.getElementById("titleInput").value;
// }

// const title = document.querySelector('#title').value;
// const author = document.querySelector('#author').value;
// const pages = document.querySelector('#pages').value;
// const read = document.querySelector('#read').value;

// const inputs = document.querySelectorAll('#bookForm input')

// let inputArr = Array.from(document.querySelectorAll('#bookForm input'));

// // inputArr.forEach(element => 
// //     console.log(`${element.id}: ${element.value}`)
// //     );

// const formData = document.querySelector('#bookForm');

// formData.addEventListener("submit", function (event) {
//     console.log(event.id);
//     //myLibrary.push(`${element.id}: ${element.value}`);
// });



