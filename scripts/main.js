let library = []
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')
const crt_btn = document.querySelector('#create-btn')
const show_books = document.querySelector('#show-books')

const Book = (title, author, pages, read) => {
    const bTitle = () => title;
    const bAuthor = () => author;
    const bPages = () => pages;
    const bRead = () => read;
    const readStatus = () => read ? 'Book read' : 'Book not read'

}

function savLib() {
    const holder = [];

    for (let i = 0; i < library.length; i += 1) {
        const bookInfo = [library[i].bTitle, library[i].bAuthor, library[i].bPages, library[i].bRead];
        holder.push(bookInfo)
    }
    localStorage.setItem("SavedBooks", JSON.stringify(holder));
}
