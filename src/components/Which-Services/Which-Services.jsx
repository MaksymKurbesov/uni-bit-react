import style from "./WhichServices.module.css";
import { SectionTitle } from "../Section-Title/Section-Title";
import WSImage1 from "../../assets/images/services/1.png";
import WSImage2 from "../../assets/images/services/2.png";
import WSImage3 from "../../assets/images/services/3.png";
import WSImage4 from "../../assets/images/services/4.png";
import WSImage5 from "../../assets/images/services/5.png";
import { DecorateArrow } from "../Icons/DecorateArrow";

const services = [
  {
    title: "Development",
    image: WSImage1,
    description:
      "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.",
  },
  {
    title: "2D/3D ART",
    image: WSImage2,
    description:
      "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.",
  },
  {
    title: "Porting",
    image: WSImage3,
    description:
      "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.",
  },
  {
    title: "QA ENGINEER",
    image: WSImage4,
    description:
      "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.",
  },
  {
    title: "SLOTS",
    image: WSImage5,
    description:
      "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.",
  },
];

const WhichServices = () => {
  return (
    <section className={style["which-services"]}>
      <div className={"container"}>
        <SectionTitle name={"Services"} />
        <ul className={style["services-list"]}>
          {services.map((service, i) => {
            return (
              <li key={i}>
                <a className={style["service-link"]} href={"/#"}>
                  <img src={service.image} alt={"Service"} width={"100%"} />
                  <div className={style["description"]}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </a>
                {/*<DecorateArrow />*/}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { WhichServices };
