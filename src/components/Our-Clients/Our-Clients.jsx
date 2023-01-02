import { SectionTitle } from "../Section-Title/Section-Title";
import Slider from "react-slick";
// import ClientSlide1 from "../../assets/images/img-clients-1.png";
// import ClientSlide2 from "../../assets/images/img-clients-2.png";
// import ClientSlide3 from "../../assets/images/img-clients-3.png";
// import ClientSlide4 from "../../assets/images/img-clients-4.png";

import ClientSlide1 from "../../assets/images/clients/client1.png";
import ClientSlide2 from "../../assets/images/clients/client2.png";
import ClientSlide3 from "../../assets/images/clients/client3.png";
import ClientSlide4 from "../../assets/images/clients/client4.png";
import ClientSlide5 from "../../assets/images/clients/client5.png";
import ClientSlide6 from "../../assets/images/clients/client6.png";

import style from "./OurClients.module.css";
import { useRef } from "react";

const slides = [
  ClientSlide1,
  ClientSlide2,
  ClientSlide3,
  ClientSlide4,
  ClientSlide5,
  ClientSlide6,
];

const OurClients = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={style["our-clients"]}>
      <div className={"container"}>
        <div className={style["our-clients-wrapper"]}>
          <SectionTitle name={"Our Clients"} cn={"our-client-custom"} />
          {/*<div className={style["buttons"]}>*/}
          {/*  <button*/}
          {/*    className={style["prev-button"]}*/}
          {/*    onClick={() => {*/}
          {/*      sliderRef.current.slickPrev();*/}
          {/*    }}*/}
          {/*  ></button>*/}
          {/*  <button*/}
          {/*    className={style["next-button"]}*/}
          {/*    onClick={() => {*/}
          {/*      sliderRef.current.slickNext();*/}
          {/*    }}*/}
          {/*  ></button>*/}
          {/*</div>*/}
          {/*<Slider {...settings} ref={sliderRef}>*/}
          {/*  {slides.map((slide, i) => {*/}
          {/*    return (*/}
          {/*      <div key={i} className={style["slide"]}>*/}
          {/*        <img src={slide} alt={`slide-${i}`} />*/}
          {/*      </div>*/}
          {/*    );*/}
          {/*  })}*/}
          {/*</Slider>*/}
          <ul className={style["slider-list"]}>
            {slides.map((slide, i) => {
              return (
                <li key={i}>
                  <img src={slide} width={"100%"} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { OurClients };
