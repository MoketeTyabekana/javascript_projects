//  Book Class: Represents a Book.

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "3434434",
      },
      {
        title: "Book Two",
        author: "Jane Doe",
        isbn: "45545",
      },
    ];
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        
        `;

    list.appendChild(row);
  }

  //   validate fields

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert success deleted alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".book-container");
    const form = document.querySelector("#bookInput");
    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}
 
// Store Class: Handles Storage.
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        const updatedBooks = books.filter(book => book.isbn !== isbn);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
    }
}


  
// Event: Display Books.
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book.

document.querySelector("#bookInput").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill in all fields");
  } else {
    const book = new Book(title, author, isbn);

    UI.addBookToList(book);

    // Show success message
    UI.showAlert("Book Added", "success");

    // Clear Fields
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
});

// Event: Remove a Book.
document.querySelector("#book-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();

     // Show delete message
 UI.showAlert(`Book Deleted`, "deleted");
  }
});
