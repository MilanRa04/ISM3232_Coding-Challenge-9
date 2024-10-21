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

    // Task 5:
    // New Method to calculate total available books in the section 
    calculateTotalBooksAvailable() {
        return this.getAvailableBooks();
    }
}


// Task 3: Create a Patron Class that has the properties name of patron, and borrowedBooks that shows the books they have borrowed
class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    //Method to borrow a book if available
    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}.`); 
        } else {
            console.log(`Sorry, "${book.title}" is currently unavailable.`);
        }
    }

    // Method to return a borrowed book
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
    borrowBook(book) {
        if (book.isAvailable) {
            super.borrowedBook(book);
        } else {
            console.log(`${this.name} (VIP) gets priority on "${book.title}".`);
        }
    }
}


// Task 5: Handle books borrowing and returning
// The code can be found under task 2 started at line 51.

// Task 6: Create and Manage Sections and Patrons

// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// Create patrons
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith", true);

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

// VIP patron tries to borrow the same book (VIP gets priority)
vipPatron.borrowBook(book1);

// Regular patron returns the book
regularPatron.returnBook(book1);

// List all books in the Fiction section
fiction.listBooks();

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);