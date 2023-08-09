import React, { useState } from "react";
import Swal from "sweetalert2";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
function BookForm({ setLoading }) {
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
  };
  if (!loader) {
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
                name="title"
                className="title_field"
                onKeyUp={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="author">
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
