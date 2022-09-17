//Code to make the local storage take array as a value
Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

//Creating an array for the book information gained from the local storage
var booksFromLocalStorage = new Array();

function displaySelectedBooks() {
  //get the local storage
  if (typeof (Storage !== "undefined")) {
    booksFromLocalStorage = localStorage.getObj("selectedBooks");

    console.log(localStorage.getItem("quantitybooks"));
  }
  //push the ids of the books into array
  console.log(booksFromLocalStorage);

  document.getElementById("quantity").innerText =
    localStorage.getItem("quantitybooks");
  // document.getElementById("isbn").innerText=booksFromLocalStorage.
  // let cartstr = " ";

  // booksFromLocalStorage.map((item, i) => {
  //   cartstr += `
  //   <div class="bookdetails-container">
  //   <div class="bookDetails">
  //     <div class="isbn">
  //       <p class="p-design">ISBN:</p>
  //       <p>${getItem.book_title}</p>
  //     </div>
  //     <div class="bookTitle">
  //       <p  class="p-design">Title:</p>
  //       <p>${item.book_title}</p>
  //     </div>
  //     <div class="author">
  //       <p  class="p-design">Author:</p>
  //       <p>${item.author}</p>
  //     </div>
  //     <div class="price">
  //       <p  class="p-design">Price:</p>
  //       <p>${item.price}</p>
  //     </div>
  //     <div class="description">
  //       <p  class="p-design">Description:</p>
  //       <p>${item.description}</p>
  //     </div>
  //     <div class="category">
  //       <p  class="p-design">Category:</p>
  //       <p>${item.category}</p>
  //     </div>

  //   </div>
  //   </div>`;
  // });
  // document.getElementById("cartDisplay").innerHTML = cartstr;
}

const displayAddtoCartList = () => {
  console.log(booksFromLocalStorage.length);
};
displaySelectedBooks();
displayAddtoCartList();
