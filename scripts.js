let myLibrary = [];
let bookID = 0;

const submitBtn = document.querySelector("#submitBtn");
const addBtn = document.querySelector('#addBtn');
const formContainer = document.querySelector('#formContainer');
const bookForm = document.querySelector('#bookForm');
const bookContainer = document.querySelector("#bookContainer");


submitBtn.addEventListener('click', (e) => {
    addBookToLibrary();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addBookToLibrary();
    }
});

addBtn.addEventListener('click', (e) => {
    showForm();
});

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let bookInfo = "";
        let haveRead;
        if (read) {
            haveRead = "Read";
        } else {
            haveRead = "Not read";
        }
        bookInfo = title + " by " + author + " " + pages + " pages " + haveRead;
        return bookInfo;
    }
}

function showForm() {
    formContainer.appendChild(bookForm);
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
    const bookCard = document.createElement('div');
    bookCard.setAttribute("class", "bookCard");
    bookContainer.appendChild(bookCard);
    bookCard.textContent = userBook.info();
    bookForm.reset();
    bookContainer.removeChild(bookForm);
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



