import style from "./HeroBanner.module.css";
import Robot from "../../assets/images/robot.png";

const HeroBanner = () => {
  return (
    <section className={style["hero-banner"]}>
      <div className={style["hero-image"]}></div>
      <div className={style["hero-text"]}>
        <h2>
          Game Development <br />
          and art studio
        </h2>
        <p>
          Uni-Bit Studio - is a solid, reliable company organized by experienced
          professionals and specialists, who been developing mobile games,
          applications and supplying qualified specialists to other studios and
          businesses professionally for over 9 years.
        </p>
      </div>

      {/*<div className={style["decor-text"]}>*/}
      {/*  <span>DEVELOPMENT</span>*/}
      {/*  <span>DEVELOPMENT</span>*/}
      {/*  <div>*/}
      {/*    <span>OF</span> VR <span>/</span> AR <span>/</span> MR <span>/</span>{" "}*/}
      {/*    WEB <span>/</span> MOBILE GAMES <span>/</span> <span>ETC</span>*/}
      {/*  </div>*/}
      {/*  <span>DEVELOPMENT</span>*/}
      {/*  <span>DEVELOPMENT</span>*/}
      {/*  <span>DEVELOPMENT</span>*/}
      {/*  <span>DEVELOPMENT</span>*/}
      {/*  <span>DEVELOPMENT</span>*/}
      {/*  <span>DEVELOPMENT</span>*/}
      {/*</div>*/}
      {/*<img src={Robot} className={style["robot"]} width={500} alt={""} />*/}
    </section>
  );
};

export { HeroBanner };
