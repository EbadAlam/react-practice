import React, { useState } from "react";
import Swal from "sweetalert2";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";

function BookForm({ theme }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loader, setLoader] = useState(false);

  const formSubmitHandler = async (event) => {
    event.preventDefault(event);
    if (title === "" || author === "") {
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "Please fill fields!",
      });
      const alertDiv = document.querySelector(".swal2-popup");
      if (theme === "dark") {
        alertDiv.classList.add("dark-alert");
      }
      if (theme === "light") {
        alertDiv.classList.remove("dark-alert");
      }
      return;
    }
    setLoader(true);
    try {
      await addDoc(collection(db, "book"), {
        title,
        author,
      });
    } catch (error) {
      console.log("Error adding book " + error);
    }
    setTitle("");
    setAuthor("");
    setLoader(false);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Book has been saved !",
      showConfirmButton: false,
      timer: 1500,
    });
    const alertDiv = document.querySelector(".swal2-popup");

    if (theme === "dark") {
      alertDiv.classList.add("dark-alert");
    }
    if (theme === "light") {
      alertDiv.classList.remove("dark-alert");
    }
  };
  if (!loader) {
    return (
      <div className="container form">
        <div>
          <h1 className="heading">Add Book & Author Name</h1>
        </div>
        <div className="form_div">
          <form onSubmit={formSubmitHandler}>
            <div className="book_div">
              <h2>Book</h2>
              <input
                type="text"
                name="title"
                className="title_field"
                onKeyUp={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="author_div">
              <h2>Author</h2>
              <input
                type="text"
                name="author"
                className="author_field"
                onChange={(event) => setAuthor(event.target.value)}
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
  return (
    <>
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    </>
  );
}
export default BookForm;
