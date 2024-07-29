const myLibrary = [];
let bookNumber = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};
  
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title,author,pages,read);
    myLibrary.push(book);
    createCard(book)
};

function createCard(book) {
    const library = document.querySelector(".library");
    
    const card = document.createElement("div");
    card.id = bookNumber;
    ++bookNumber;
    card.className = "card";
    library.prepend(card)

    const title = document.createElement("p");
    title.className = "title";
    title.innerText = book.title;
    card.appendChild(title);

    const author = document.createElement("p");
    author.className = "author";
    author.innerText = book.author;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.className = "pages";
    pages.innerText = book.pages + " pages";
    card.appendChild(pages);

    const read = document.createElement("p");
    read.className = "read";
    if (book.read) {
        read.innerText = "Read ✅";
    } else {
        read.innerText = "Not read ❌";
    };
    card.appendChild(read);

    const remove = document.createElement("button");
    remove.className = "remove";
    remove.innerText = "Remove";
    card.appendChild(remove);

    removable();
}

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    title = document.getElementById("title").value;
    author =  document.getElementById("author").value;
    pages =  document.getElementById("pages").value;
    read = document.getElementById("read").checked;

    addBookToLibrary(title,author,pages,read);

    form.reset();
});

function removable() {
    let removeButtons = document.querySelectorAll(".remove")

    removeButtons.forEach(button => {
        button.addEventListener("click", function() {
            toRemove = button.parentNode.id;
            delete myLibrary[toRemove];
            toDelete = document.getElementById(toRemove);
            toDelete.remove();
        });
    });
};

addBookToLibrary("The Hobbit", "JRR Tolkien", "234", true)
addBookToLibrary("Harry Potter", "JK Rowling", "123", false)
