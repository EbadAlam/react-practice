import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";

function BookListing() {
  const [books, setBooks] = useState([]);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    try {
      setLoader(true);
      await getDocs(collection(db, "book")).then((QuerySnapshot) => {
        let raw = QuerySnapshot;
        setBooks(raw.docs);
        setLoader(false);
      });
    } catch (error) {
      console.log("error getting data:", error);
    }
  };

  if (!loader) {
    return (
      <div className="book-listing container">
        {books.map((listValue, index) => {
          return (
            <ul>
              <li>
                <div>
                  <h3 className="title">{listValue.data().title}</h3>
                  <h3 className="author">{listValue.data().author}</h3>
                </div>
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
