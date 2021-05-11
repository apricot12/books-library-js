let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayLibrary(newBook) {
    let table = document.querySelector('table');
    let tr = document.createElement('tr');
    tr.classList.add('book-row');

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let removeBtn = document.createElement('button');
    let td4Btn = document.createElement('button');

    td1.textContent = newBook.author;
    td2.textContent = newBook.title;
    td3.textContent = newBook.pages;
    td4.textContent = newBook.read;
    removeBtn.textContent = "Remove";
    td4Btn.textContent = "Change the status";
    td4Btn.classList.add("float-right");
    tr.setAttribute("data-index", myLibrary.indexOf(newBook));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td5.appendChild(removeBtn);
    td4.appendChild(td4Btn);

    table.appendChild(tr);
}


let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let author = document.querySelector("#author");
    let title = document.querySelector("#title");
    let pages = document.querySelector("#pages");
    let read = document.querySelector("#read");

    let newBook = new Book(author.value, title.value, pages.value, read.checked);
    addBookToLibrary(newBook);
    displayLibrary(newBook);
});
