import style from "./Contacts.module.css";
import { SectionTitle } from "../Section-Title/Section-Title";
import { Twitter } from "../Icons/Twitter";
import { Linkedin } from "../Icons/Linkedin";
import { Ar } from "../Icons/Ar";
import { Instagram } from "../Icons/Instagram";
import { Facebook } from "../Icons/Facebook";
import { Mail } from "../Icons/Mail";
import { Phone } from "../Icons/Phone";

const Contacts = () => {
  return (
    <section className={style["contacts"]}>
      <div className={"container"}>
        <div className={style["contacts-wrapper"]}>
          <SectionTitle name={"Contacts"} cn={"contacts-title"} />
          <ul className={style["contacts-list"]}>
            <li>
              <Phone />
              <div className={style["info"]}>
                <span>Canada:</span>
                <p>+1 (780) 880-53-59</p>
              </div>
            </li>
            <li>
              <Phone />
              <div className={style["info"]}>
                <span>Ukraine:</span>
                <p>+38 (050) 991-82-71</p>
              </div>
            </li>
            <li>
              <Mail />
              <div className={style["info"]}>
                <span>Email:</span>
                <p>INFO@UNI-BIT.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={style["social-links"]}>
        <div className={"container"}>
          <ul>
            <li>
              <Facebook />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <Ar />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Linkedin />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Contacts };
