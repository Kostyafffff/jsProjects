export class Book {
    private title;
    private author;
    private hasResigned;

    constructor(title: string, author: string, hasResigned: boolean) {
        this.title = title;
        this.author = author;
        this.hasResigned = false;
    }

    update(author: string) {
        this.author = author;
        this.hasResigned = true;
    }
}

class BooksPrinter {
    constructor(books) {
        this.books = books;
    }

    toJSON() {
        return JSON.stringify({
            title: this.books.title,
            author: this.books.author,
            hasResigned: this.books.hasResigned,
        })
    }

    toXML() {
        return `
           <news>
               <title>${this.books.title}</title>
               <author>${this.books.author}</author>
           </news>
        `
    }
}

const book = new Book('The Old Man and the Sea', 'Ernest Hemingway', false);

const printer = new BooksPrinter(book);

console.log(printer.toJSON());
