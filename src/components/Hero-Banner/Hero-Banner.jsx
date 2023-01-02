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
          Your personal full-cycle game development team leveraging 10+ years of
          experience and providing top-level artists and developers on board. We
          nurture an individual approach to every client and try to deliver
          exceptional services meeting all needs and modern game industry
          trends. The Uni-Bit team is well-versed with projects of any scale and
          complexity, as we have a diverse tech stack in the team. Our team
          members have a prior track record at Unity, so they can create art
          solutions no other company in the market will.
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
