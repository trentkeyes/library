function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let bookInfo = "";
        let haveRead;
        if (read) {
            haveRead = ", read";
        } else {
            haveRead = ", not read yet";
        }
        bookInfo = title + " by " + author + ", " + pages + " pages" + haveRead;
    }
}

// const hobbit = new Book('The Bible', 'God', 15405, true);

// hobbit.info();

let myLibrary = [];
let bookID = 1;

function addBookToLibrary() {
    let inputs = document.querySelector('#bookForm');
    let myBook = [];
    let text = "";
    for (let i = 0; i < inputs.length - 1; i++) {
        myBook.push(inputs.elements[i].value);
    }
    console.log(myBook);

    const book1 = new Book(...myBook);

    myLibrary.push(book1);

    console.log(myLibrary);
    document.querySelector('#bookDisplay').textContent = bookInfo;
}



// function userInput() {
//     let str = document.getElementById("titleInput").value;
// }

// const title = document.querySelector('#title').value;
// const author = document.querySelector('#author').value;
// const pages = document.querySelector('#pages').value;
// const read = document.querySelector('#read').value;

// const inputs = document.querySelectorAll('#bookForm input')

let inputArr = Array.from(document.querySelectorAll('#bookForm input'));

// inputArr.forEach(element => 
//     console.log(`${element.id}: ${element.value}`)
//     );

const formData = document.querySelector('#bookForm');

// formData.addEventListener("submit", function (event) {
//     console.log(event.id);
//     //myLibrary.push(`${element.id}: ${element.value}`);
// });



