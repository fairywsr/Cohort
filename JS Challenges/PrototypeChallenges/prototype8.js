// Problem statement
// Create a Library constructor that initializes a books array. Implement:
// • addBook(book): Adds a book to the books array.
// • findBook(tit1e): Searches for a book by title and returns "Book found" or "Book not
// found".
// Challenge
// • Implement Library constructor with a books array.
// • Attach addBook(book) and findBook(tit1e) methods to the prototype.

function Library(){
    this.books = []
}

Library.prototype.addBook = function(book){
     this.books.push(book)
}
Library.prototype.findBook = function(book){
    this.book.includes(title) ? "Book found" : "Book not found";
}