"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(title, author, hasResigned) {
        this.title = title;
        this.author = author;
        this.hasResigned = false;
    }
    Book.prototype.update = function (author) {
        this.author = author;
        this.hasResigned = true;
    };
    return Book;
}());
exports.Book = Book;
var BooksPrinter = /** @class */ (function () {
    function BooksPrinter(books) {
        this.books = books;
    }
    BooksPrinter.prototype.toJSON = function () {
        return JSON.stringify({
            title: this.books.title,
            author: this.books.author,
            hasResigned: this.books.hasResigned,
        });
    };
    BooksPrinter.prototype.toXML = function () {
        return "\n           <news>\n               <title>" + this.books.title + "</title>\n               <author>" + this.books.author + "</author>\n           </news>\n        ";
    };
    return BooksPrinter;
}());
var book = new Book('The Old Man and the Sea', 'Ernest Hemingway', false);
var printer = new BooksPrinter(book);
console.log(printer.toJSON());
