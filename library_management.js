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

// Task 3: Create a Patron Class that has the properties name of patron, and borrowedBooks that shows the books they have borrowed
class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    //Method to borrow a book if available
    borrowedBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}.`); 
        } else {
            console.log(`Sorry, "${book.title}" is currently unavailable.`);
        }
    }

    // Methiod to return a borrowed book
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.isAvailable = true;
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned "${book.title}.`);
        } else {
            console.log(`${this.name} returned "${book.title}".`);
        }
    }
}

// Task 4: Create a VIPPatron class that inherits from the class Patron, that adds the property priority.
class VIPPatron extends Patron {
    constructor(name, priority) {
        super(name);
        this.priority = priority;
    }

    // Override the borrowBook method for VIP Patrons
    borrowedBook(book) {
        if (book.isAvailable) {
            super.borrowedBook(book);
        } else {
            console.log(`${this.name} (VIP) gets priority on "${book.title}".`);
        }
    }
}