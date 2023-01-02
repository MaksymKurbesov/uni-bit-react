import Logo from "./../../assets/images/logo.png";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={"container"}>
        <div className={style["header-wrapper"]}>
          <img
            className={style["logotype"]}
            src={Logo}
            width={250}
            alt={"logotype"}
          />
          <nav className={style["mobile-menu"]}>
            <label className={style["menu-button-container"]}>
              <input className={style["checkbox"]} type="checkbox" />
              <div className={style["hamburger-lines"]}>
                <span className={`${style["line"]} ${style["line1"]}`}></span>
                <span className={`${style["line"]} ${style["line2"]}`}></span>
                <span className={`${style["line"]} ${style["line3"]}`}></span>
              </div>
            </label>
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
