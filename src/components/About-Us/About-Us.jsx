import style from "./AboutUs.module.css";
import Feature1 from "../../assets/images/feature-1.png";
import Feature2 from "../../assets/images/feature-2.png";
import Feature3 from "../../assets/images/feature-3.png";

const AboutUs = () => {
  return (
    <section className={style["about-us"]}>
      {/*<div className={"container"}>*/}
      <div className={style["about-us-wrapper"]}>
        <h3>Information About Us</h3>
        <div className={style["feature-list"]}>
          <div>
            <img src={Feature1} width={"100%"} />
          </div>
          <div>
            <img src={Feature2} width={"100%"} />
          </div>
          <div>
            <img src={Feature3} width={"100%"} />
          </div>
        </div>
      </div>
      {/*</div>*/}
    </section>
  );
};

export { AboutUs };
