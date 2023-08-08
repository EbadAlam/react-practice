import React, { useState } from "react";
import Swal from "sweetalert2";
function BookForm() {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("working");
    if (book === "" || author === "") {
      //   alert("error");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill fields!",
      });
    }
  };
  return (
    <div className="container form">
      <div>
        <h1 className="heading">Add Book & Author Name</h1>
      </div>
      <div>
        <form onSubmit={formSubmitHandler}>
          <div className="book">
            <h2>Book</h2>
            <input
              type="text"
              name="book"
              onChange={(e) => setBook(e.target.value)}
            />
          </div>
          <div className="author">
            <h2>Author</h2>
            <input
              type="text"
              name="author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="submit-btn">
            <input type="submit" value="Add Book" className="custom_btn" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default BookForm;
