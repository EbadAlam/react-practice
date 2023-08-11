import Swal from "sweetalert2";
import "./App.css";
import BookForm from "./Components/BookForm/BookForm";
import BookListing from "./Components/BookListing/BookListing";
import ThemeSwitchButton from "./Components/ThemeSwitchButton/ThemeSwitchButton";
import moon from "./Images/moon.png";
import sun from "./Images/sunny.png";
import moonWhite from "./Images/white-moon.png";
import sunWhite from "./Images/white-sunny.png";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./Config/FirebaseConfig";

function App() {
  const [moonSrc, setMoonSrc] = useState(moon);
  const [sunSrc, setSunSrc] = useState(sun);
  const [theme, setTheme] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loader, setLoader] = useState(false);
  const [x, setX] = useState(false);
  const [books, setBooks] = useState([]);

  const onChange = (checked) => {
    const mainApp = document.querySelector(".App");
    if (checked === true) {
      setTheme("dark");
      // console.log(theme);
      setMoonSrc(moonWhite);
      setSunSrc(sunWhite);
      mainApp.classList.add("theme-dark");
    }
    if (checked === false) {
      setTheme("light");
      setMoonSrc(moon);
      setSunSrc(sun);
      mainApp.classList.remove("theme-dark");
    }
  };
  const getBooks = async () => {
    try {
      setLoader(true);
      await getDocs(collection(db, "book")).then((QuerySnapshot) => {
        // let raw = QuerySnapshot;
        setBooks(QuerySnapshot.docs);
        setLoader(false);
      });
    } catch (error) {
      console.log("error getting data:", error);
    }
    // console.log("dajsdhasdj");
  };
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
      setX(true);
    } catch (error) {
      console.log("Error adding book " + error);
    }
    setTitle("");
    setAuthor("");
    // getBooks();
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

  useEffect(() => {
    getBooks();
  }, [x]);
  return (
    <>
      <div className="App">
        <ThemeSwitchButton
          onChange={onChange}
          moon={moon}
          sun={sun}
          moonSrc={moonSrc}
          sunSrc={sunSrc}
        ></ThemeSwitchButton>
        <BookForm
          theme={theme}
          loader={loader}
          formSubmitHandler={formSubmitHandler}
          setAuthor={setAuthor}
          setTitle={setTitle}
        />
        <BookListing books={books} loader={loader}></BookListing>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
