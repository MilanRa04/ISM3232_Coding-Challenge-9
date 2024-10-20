// Task 1: Create a class called book that has the properties: title, author, ISBN, and if the vook is available or not.
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }

    // Method to get book details
    getDetails() {
        return `${this.title} by ${this.author}, ISBN: ${this.ISBN}`;
    }

    // Getter for isAvailable
    get isAvailable() {
        return this._isAvailable;
    }

    // Setter for isAvailable
    set isAvailable(status) {
        this._isAvailable = status;
    }
}

// Task 2: Create a Section class that has the properties: name, and books.

class Section {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // Method to add a book to the section
    addBook(book) {
        this.books.push(book);
    }

    // Method to get the number fo available books
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length
    }

    // Method to list all books in the section, and show the titles and if they are available or not
    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.title} - ${book.isAvailable ? 'Available' : 'Borrowed'}`);
        });
    }
}