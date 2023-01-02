import style from "./WhoWeAre.module.css";
import Image from "../../assets/images/img-who-we-are.jpg";
import { SectionTitle } from "../Section-Title/Section-Title";
import { DecorateArrow } from "../Icons/DecorateArrow";

const WhoWeAre = () => {
  return (
    <section className={style["who-we-are"]}>
      <div className={"container"}>
        <SectionTitle
          name={"Who We Are"}
          color={"white"}
          cn={"who-we-are-custom"}
        />
        <div className={style["who-we-are-wrapper"]}>
          <div className={style["who-we-are__description"]}>
            <h3>UNIBIT IS...</h3>
            <p>
              Your personal full-cycle game development team leveraging 10+
              years of experience and providing top-level artists and developers
              on board. We nurture an individual approach to every client and
              try to deliver exceptional services meeting all needs and modern
              game industry trends. The Uni-Bit team is well-versed with
              projects of any scale and complexity, as we have a diverse tech
              stack in the team.
            </p>
            <p>
              Our team members have a prior track record at Unity, so they can
              create art solutions no other company in the market will. Looking
              for more reasons to hire us for your game development? Check out
              60+ successful projects and 10+ years of dedicated work in the
              game development industry.
            </p>
            <p>
              Besides, we can handle your game development in-house without
              subcontracting dubious freelancers and spreading out your
              sensitive data across the globe. Whether you need a full game or
              some game art and design solutions, you’re welcome to Uni-Bit – a
              one-stop shop for premium-level gaming solutions.
            </p>
            <div className={style["decor"]}>
              <svg
                width="184"
                height="138"
                viewBox="0 0 184 138"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.6729 0L0 22.4651L89.4206 138L130.692 134.791L184 48.1395L166.804 25.6744L32.6729 0Z"
                  fill="#C90C0F"
                ></path>
              </svg>
            </div>
          </div>
          <div className={style["who-we-are__image"]}>
            <img src={Image} alt={"Decorate"} width={300} />
            <button className={style["more-info-button"]}>
              <span>
                More <br /> Info <br /> About Us <br />
              </span>
              <DecorateArrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WhoWeAre };
