import React from "react";

function BookForm({ formSubmitHandler, setTitle, setAuthor, loader }) {
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
