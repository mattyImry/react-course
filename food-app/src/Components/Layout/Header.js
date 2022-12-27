import React from "react";
import HeaderCartButton from "./HeaderCartButton.js";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Food</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food on table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
