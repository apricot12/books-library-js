const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

addBookToLibrary = (newBook) => {
  myLibrary.push(newBook);
}

displayLibrary = (newBook) => {
  const table = document.querySelector('table');
  const tr = document.createElement('tr');
  tr.classList.add('book-row');

  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  const td5 = document.createElement('td');
  const removeBtn = document.createElement('button');
  const td4Btn = document.createElement('button');

  td1.textContent = newBook.author;
  td2.textContent = newBook.title;
  td3.textContent = newBook.pages;
  td4Btn.textContent = newBook.read;
  removeBtn.textContent = 'Remove';
  td4Btn.classList.add('float-right');
  tr.setAttribute('data-index', myLibrary.indexOf(newBook));

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  td5.appendChild(removeBtn);
  td4.appendChild(td4Btn);
  table.appendChild(tr);

  td4Btn.addEventListener('click', () => {
    if (td4Btn.textContent === 'true') {
      td4Btn.textContent = 'false';
    } else {
      td4Btn.textContent = 'true';
    }
  });

  removeBtn.addEventListener('click', () => {
    tr.remove();
  });
}

validateForm = () => {
  var author = document.querySelector("#author").value
  var title = document.querySelector("#title").value
  var pages = document.querySelector("#pages").value

  if (author == "" || title == "" || pages == "") {
    alert("Name must be filled out");
    return false;
  }
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const author = document.querySelector('#author');
  const title = document.querySelector('#title');
  const pages = document.querySelector('#pages');
  const read = document.querySelector('#read');

  const newBook = new Book(author.value, title.value, pages.value, read.checked);
  addBookToLibrary(newBook);
  displayLibrary(newBook);
  validateForm();
});
