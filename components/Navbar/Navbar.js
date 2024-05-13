"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState("dark_theme");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleNavbar = () => {
    setIsActive(!isActive);
    document.body.classList.toggle("active"); // overflow hidden
  };

  const toggleTheme = () => {
    setToggle(!toggle);
    const newTheme = theme === "light_theme" ? "dark_theme" : "light_theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "light_theme") {
      document.body.classList.remove("dark_theme");
      document.body.classList.add("light_theme");
    } else {
      document.body.classList.remove("light_theme");
      document.body.classList.add("dark_theme");
    }
  }, [theme]);

  return (
    <header className={classes.header}>
      <div className={`${classes.container} container`}>
        <h1 className={`${classes.logo} h1`}>
          <Link href="#">
            Ahmed<span>.</span>
          </Link>
        </h1>

        <div className={classes["navbar-actions"]}>
          {/* <select name="language" id="lang">
            <option value="en">En</option>
            <option value="ar">Ar</option>
          </select> */}

          <button
            className={`${classes["theme-btn"]}  ${
              toggle ? classes.active : ""
            } `}
            aria-label="Change Theme"
            title="Change Theme"
            onClick={toggleTheme}
          >
            <span className={classes.icon}></span>
          </button>
        </div>

        <button
          className={`${classes["nav-toggle-btn"]} ${
            isActive ? classes.active : ""
          }`}
          aria-label="Toggle Menu"
          title="Toggle Menu"
          onClick={toggleNavbar}
        >
          <span className={classes.one}></span>
          <span className={classes.two}></span>
          <span className={classes.three}></span>
        </button>

        <nav className={`${classes.navbar} ${isActive ? classes.active : ""}`}>
          <ul className={classes["navbar-list"]}>
            {["Home", "About", "Skills", "Portfolio", "Contact"].map(
              (link, index) => (
                <li key={index}>
                  <Link
                    href={`#${link.toLocaleLowerCase()}`}
                    className={classes["navbar-link"]}
                  >
                    {link}.
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

{
  /* <li>
              <Link href="#home" class={classes["navbar-link"]}>
                Home.
              </Link>
            </li>

            <li>
              <Link href="#about" class={classes["navbar-link"]}>
                About.
              </Link>
            </li>

            <li>
              <Link href="#skills" class={classes["navbar-link"]}>
                Skills.
              </Link>
            </li>

            <li>
              <Link href="#portfolio" class={classes["navbar-link"]}>
                Portfolio.
              </Link>
            </li>

            <li>
              <Link href="#contact" class={classes["navbar-link"]}>
                Contact.
              </Link>
            </li> */
}
