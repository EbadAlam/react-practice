import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import { Table } from "antd";

function BookListing() {
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      // setLoader(true);
      // const data = await getDocs(collection(db, "book"));
      // .then(
      // (QuerySnapshot) => {
      //   let raw = QuerySnapshot.docs;
      // .map((singleBook, index) => {
      // return {
      //   title: singleBook.data().title,
      //   author: singleBook.data().author,
      // };
      setLoader(false);
      // console.log("data", data);
      // }
      // );
      // setBooks(data.docs);
      // });
      // setBooksArray(books);
    } catch (error) {
      console.log("error getting data:", error);
    }
  };
  const dataSource = [
    {
      key: "1",
      book_title: "Mike",
      author: 32,
    },
    {
      key: "2",
      book_title: "John",
      author: 42,
    },
  ];

  const columns = [
    {
      title: "Book Title",
      dataIndex: "book_title",
      key: "book_title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
  ];
  if (!loader) {
    return (
      <div className="book-listing container">
        <ul>
          {/* {books.lenght > 0 &&
          books.map((book, index) => {
            return <li key={index}>{book.title}</li>;
          })} */}
        </ul>

        <Table dataSource={dataSource} columns={columns} />
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
