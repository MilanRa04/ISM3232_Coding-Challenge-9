// Task 1: Create a class called book that has the properties, title, author, ISBN, and if the vook is available or not.
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