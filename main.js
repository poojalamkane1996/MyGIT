//mybook is main class that book created
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//class UI :handles all UI realted things
class UI {
    static DisplayBooks() {
        const storedbooks = [
            {

                title: "Book One",
                author: "Pooja Yadav",
                isbn: 1234
            },
            {
                title: "Book two",
                author: "Shon Yadav",
                isbn: 1234344
            }

        ];
        const book = storedbooks;
        console.log(book);
        //loop through all books
        book.forEach((books) => UI.addBooktoList(books));

    }
    //addbooks into list 
    static addBooktoList(books) {
        const list = document.querySelector("#table-items");
        //row created
        const row = document.createElement("tr");
        //td created
        var td1 = row.appendChild(document.createElement('td'));
        var td2 = row.appendChild(document.createElement('td'));
        var td3 = row.appendChild(document.createElement('td'));
        var td4 = row.appendChild(document.createElement('td'));


        //insert data into td
        td1.innerHTML = books.title;
        td2.innerHTML = books.author;
        td3.innerHTML = books.isbn;
        td4.innerHTML = '<a href="#" class="btn btn-danger btn-sm delete">X</a>';
        //attach  list to row
        list.appendChild(row);

    }

    //delete books from list
    static deletebooks(el) {
        if (el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();
        }
    }


    //clear all the fileds
    static clearfileds() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}

//Event :Display Books
document.addEventListener('DOMContentLoaded', UI.DisplayBooks);

//form initilization
const myForm = document.querySelector("#book-form");

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    //Event :Add webpage Elements into books
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    const msg=document.querySelector(".error_msg");

    //validate input fields
    if (title === "" && author === "" && isbn === "") {
        msg.innerHTML="Please fill All the fields!";
        msg.style.color="red";
    }
    else {
        //instanstiate book
        const book1 = new Book(title, author, isbn);

        //add data to booklist
        UI.addBooktoList(book1);

        //clear fields
        UI.clearfileds();
    }
}

//remove elemets form list
const Remove = document.querySelector("#table-items");
Remove.addEventListener('click', remove_fun);
function remove_fun(el) {
    UI.deletebooks(el.target);
}
