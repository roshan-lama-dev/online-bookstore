//Code to make the local storage take array as a value
Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

//Creating an array for the book information gained from the local storage
var booksFromLocalStorage = new Array();

var bookquantityFromLocalStorage;

if (typeof (Storage !== "undefined")) {
  booksFromLocalStorage = localStorage.getObj("selectedBooks");

  bookquantityFromLocalStorage = localStorage.getItem("quantitybooks");
}

//Display the book details from the local storage in the HTML element
function displaySelectedBooks() {
  let str = "";
}

// getValueFromStorage();
displaySelectedBooks();
displayAddtoCartList();

//remove book from the cart function
function removeBook(id) {
  localStorage.removeItem("selectedBooks");
  localStorage.removeItem("quantitybooks");
}

//Remove all the books from the local storage
function removeAllBooks() {
  let text =
    "Do you want to remove all the books from the cart !\nEither OK or Cancel.";
  if (confirm(text) == true) {
    localStorage.clear();
    alert("The shopping cart is empty now");
    displaySelectedBooks();
  } else {
    text = "You canceled!";
  }
}

//Send the book list
function sendBooks() {
  alert("Btn0000");
  if (booksFromLocalStorage.length == 0) {
    alert(
      "Your order cannot be processed as your shopping cart is empty. Please select at least one book"
    );
  } else if (booksFromLocalStorage.length !== 0) {
    alert(
      "“Thank you for your order. We have received it and will process your order soon"
    );
  }
}
