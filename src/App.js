import "./App.css";
import BookForm from "./Components/BookForm/BookForm";
import BookListing from "./Components/BookListing/BookListing";
import ThemeSwitchButton from "./Components/ThemeSwitchButton/ThemeSwitchButton";
import moon from "./Images/moon.png";
import sun from "./Images/sunny.png";
import moonWhite from "./Images/white-moon.png";
import sunWhite from "./Images/white-sunny.png";
import { useState } from "react";
import Swal from "sweetalert2";
function App() {
  const [moonSrc, setMoonSrc] = useState(moon);
  const [sunSrc, setSunSrc] = useState(sun);
  const onChange = (checked) => {
    const mainApp = document.querySelector(".App");
    if (checked === true) {
      setMoonSrc(moonWhite);
      setSunSrc(sunWhite);
      mainApp.classList.add("theme-dark");
    }
    if (checked === false) {
      setMoonSrc(moon);
      setSunSrc(sun);
      mainApp.classList.remove("theme-dark");
    }
  };
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [array, setArray] = useState([]);
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
    setArray([book], [author]);
    console.log(array);
  };
  return (
    <div className="App">
      <ThemeSwitchButton
        onChange={onChange}
        moon={moon}
        sun={sun}
        moonSrc={moonSrc}
        sunSrc={sunSrc}
      ></ThemeSwitchButton>
      <BookForm setBook={setBook} setAuthor={setAuthor}></BookForm>
      <BookListing></BookListing>
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
      <br />
      <br />
    </div>
  );
}

export default App;
