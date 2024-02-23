const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    // More books...
];

const searchInput = document.getElementById('searchInput')
const booksList = document.getElementById('booksList')

function displayBooks(books) {
    booksList.innerHTML = '';
    if (books.length === 0) {
        booksList.innerHTML = '<p class="NoBooksFound">No books found</p>';
        return;
    }
    booksList.innerHTML = '';
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book');
        bookItem.innerHTML = `
        <p class="title">Title:${book.title}</p> 
        <p class="author">Author:${book.author}</p> 
        <p class="year">Year: ${book.year}</p>`;
        booksList.appendChild(bookItem);
    });
}

function highlighaMatchingText(text, keyword) {
    // Create a regular expression to match the keyword globally  to RegExo
    const regex = new RegExp(keyword, 'gi')
        // Wrap matching text in a <span> with a highlight class
    return text.replace(regex, match => `<span class="highlight">${match}</span>`)
}

function filterBooks(keyword) {
    const filterBooks = books.filter(book => {
        const titleSelectMatch = book.title.toLowerCase().includes(keyword.toLowerCase());
        const authorSelectMatch = book.author.toLowerCase().includes(keyword.toLowerCase())
        return titleSelectMatch || authorSelectMatch; // Return true if either the title or author matches the keyword
    })


    displayBooks(filterBooks.map(book => ({
        ...book,
        // Highlight matching text
        title: highlighaMatchingText(book.title, keyword), // Highlight matching  in the title text
        author: highlighaMatchingText(book.author, keyword), //// Highlight matching  in the author to text

    })))
}


searchInput.addEventListener('input', () => {
    const searchTrim = searchInput.value.trim();

    filterBooks(searchTrim)

})

displayBooks(books)