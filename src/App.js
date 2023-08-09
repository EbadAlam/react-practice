import "./App.css";
import BookForm from "./Components/BookForm/BookForm";
import BookListing from "./Components/BookListing/BookListing";
import ThemeSwitchButton from "./Components/ThemeSwitchButton/ThemeSwitchButton";
import moon from "./Images/moon.png";
import sun from "./Images/sunny.png";
import moonWhite from "./Images/white-moon.png";
import sunWhite from "./Images/white-sunny.png";
import { useState } from "react";

function App() {
  const [moonSrc, setMoonSrc] = useState(moon);
  const [sunSrc, setSunSrc] = useState(sun);
  // const [loading, setLoading] = useState(false);
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

  return (
    <>
      <div className="App">
        {/* {!loading && <Loader />} */}
        {/* <Loader /> */}
        {/* {loading && (
          <div> */}
        <ThemeSwitchButton
          onChange={onChange}
          moon={moon}
          sun={sun}
          moonSrc={moonSrc}
          sunSrc={sunSrc}
        ></ThemeSwitchButton>
        <BookForm></BookForm>
        <BookListing></BookListing>
        {/* </div>
        )} */}
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
    </>
  );
}

export default App;
