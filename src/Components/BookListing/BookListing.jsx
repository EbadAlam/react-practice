import React from "react";

function BookListing({ books, loader }) {
  if (!loader) {
    return (
      <div className="book-listing container">
        {books.map((listValue, index) => {
          return (
            <ul key={index}>
              <li>
                <h3 className="s-no">{index + 1}</h3>
                <h3 className="title">{listValue.data().title}</h3>
                <h3 className="author">{listValue.data().author}</h3>
              </li>
            </ul>
          );
        })}
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

export default BookListing;
