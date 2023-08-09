import { Switch } from "antd";
import React from "react";

function ThemeSwitchButton({ onChange, moon, sun, sunSrc, moonSrc }) {
  return (
    <div className="theme-switch">
      <img id="sun-img" src={sunSrc} alt="sun" />
      <div>
        <Switch onChange={onChange} />
      </div>
      <img id="moon-img" src={moonSrc} alt="moon" />
    </div>
  );
}

export default ThemeSwitchButton;
