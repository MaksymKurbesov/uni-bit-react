import Logo from "./../../assets/images/logo.png";
import style from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(toggle);
  });

  return (
    <header>
      <div className={"container"}>
        <div className={style["header-wrapper"]}>
          <a href={"/#"}>
            <img
              className={style["logotype"]}
              src={Logo}
              width={250}
              alt={"logotype"}
            />
          </a>

          <nav className={style["mobile-menu"]}>
            <label className={style["menu-button-container"]}>
              <input className={style["checkbox"]} type="checkbox" />
              <div
                className={style["hamburger-lines"]}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <span className={`${style["line"]} ${style["line1"]}`}></span>
                <span className={`${style["line"]} ${style["line2"]}`}></span>
                <span className={`${style["line"]} ${style["line3"]}`}></span>
              </div>
            </label>
            {/*  ${*/}
            {/*  style[`${mobileMenuIsShown ? "active" : "no-active"}`]*/}
            {/*}*/}
            {/*{toggle ? (*/}
            <ul
              className={`${style[`nav-list-mobile`]} ${
                toggle ? style["active"] : ""
              }`}
            >
              <li>
                <a href={"/#"}>Company</a>
              </li>
              <li>
                <a href={"/#"}>Services</a>
              </li>
              <li>
                <a href={"/#"}>Portfolio</a>
              </li>
              <li>
                <a href={"/#"}>Contact Us</a>
              </li>
            </ul>
            {/*) : null}*/}
          </nav>
          <nav className={style["desktop-menu"]}>
            <ul className={style["nav-list"]}>
              <li>
                <a href={"/#"}>Company</a>
              </li>
              <li>
                <a href={"/#"}>Services</a>
              </li>
              <li>
                <a href={"/#"}>Portfolio</a>
              </li>
              <li>
                <a href={"/#"}>Contact Us</a>
              </li>
            </ul>
          </nav>
          <button className={style["contact-button"]}>GET IN TOUCH</button>
        </div>
      </div>
    </header>
  );
};

export { Header };
