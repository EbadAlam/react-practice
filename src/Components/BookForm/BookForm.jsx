import React from "react";
function BookForm({ formSubmitHandler, setBook, setAuthor }) {
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
