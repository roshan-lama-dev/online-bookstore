//Code to make the local storage take array as a value

//Creating an array for the book information gained from the local storage
var booksFromLocalStorage = [];

var bookquantityFromLocalStorage;

//Display the book details from the local storage in the HTML element
function displaySelectedBooks() {
  if (!booksFromLocalStorage.length === 0) {
    let str = "";
    if (typeof (Storage !== "undefined")) {
      booksFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
      console.log(booksFromLocalStorage);

      str += ` <table>
<thead>
  <th>ISBN</th>
  <th>Title</th>
  <th>Author</th>
  <th>Price</th>
  <th>Description</th>
  <th>Category</th>
  <th>QTY</th>
  <th>Subtotal</th>
</thead>
<tbody>`;

      booksFromLocalStorage.map((item, i) => {
        str += ` <tr >
<td>${item.iSBN}</td>
<td>${item.book_title}</td>
<td>${item.author}</td>
<td>${item.price}</td>
<td>${item.description}</td>
<td>${item.category}</td>
<td>${item.cartQty}</td>

</tr>`;
      });

      str += `</tbody>
    </table>`;
      console.log("was here", str);

      document.getElementById("cartDisplay").innerHTML = str;
    }
  } else {
    alert("The local storage is empty");
  }
}

// getValueFromStorage();
displaySelectedBooks();

//remove book from the cart function
function removeBook(id) {
  localStorage.removeItem("cartItems");
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
  if (booksFromLocalStorage.length === 0) {
    alert(
      "Your order cannot be processed as your shopping cart is empty. Please select at least one book"
    );
  } else if (booksFromLocalStorage.length !== 0) {
    alert(
      "“Thank you for your order. We have received it and will process your order soon"
    );
  }
}
