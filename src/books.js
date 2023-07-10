function findAuthorById(authors, id) {
  // return author with matched ID
  return findById(authors, id);
}

function findBookById(books, id) {
  // return book by matched ID
  return findById(books, id);
}

// helper function: provide ID to locate corresponding entry in a given array
function findById(entries, id) {
  return entries.find((entry) => entry.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  );
  let booksBorrowed = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );
  let finalArray = [[...booksBorrowed], [...booksReturned]];
  return finalArray;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      return { ...borrow, ...account };
    })
    .slice(0, 10);
}

function findBooksByGenre(genre) {
  var books = {
      "Mystery": ["Book 1", "Book 2", "Book 3"],
      "Fantasy": ["Book 4", "Book 5"],
      // Add more genres and corresponding books here
  };

  return books[genre] || [];
}

function showBooksByGenre(genre) {
  var bookListElement = document.getElementById("books-by-genre");
  bookListElement.innerHTML = "";

  var books = findBooksByGenre(genre);

  if (books.length > 0) {
      for (var i = 0; i < books.length; i++) {
          var bookItem = document.createElement("li");
          bookItem.textContent = books[i];
          bookListElement.appendChild(bookItem);
      }
  } else {
      var noBooksItem = document.createElement("li");
      noBooksItem.textContent = "No books available in this genre.";
      bookListElement.appendChild(noBooksItem);
  }
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
  findBooksByGenre,
  showBooksByGenre
};