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
    author.innerText = "By " + book.author;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.className = "pages";
    pages.innerText = book.pages + " pages";
    card.appendChild(pages);

    const read = document.createElement("input");
    read.setAttribute("type", "checkbox");
    const readLabel = document.createElement("label");
    readLabel.innerText = "Read"
    readLabel.className = "read";
    if (book.read) {
        read.checked = true;
    };
    readLabel.appendChild(read);
    card.appendChild(readLabel);

    const removeSection = document.createElement("div");
    removeSection.className = "removeSection";
    const remove = document.createElement("button");
    remove.innerHTML = "<img src=\ './delete_icon.svg\'>";
    remove.className = "remove";
    removeSection.appendChild(remove)
    card.appendChild(removeSection);

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
            toRemove = button.parentNode.parentNode.id;
            delete myLibrary[toRemove];
            toDelete = document.getElementById(toRemove);
            toDelete.remove();
        });
    });
};

addBookToLibrary("The Hobbit", "J. R. R. Tolkien", "347", true)
addBookToLibrary("Harry Potter", "J.K. Rowling", "333", false)
