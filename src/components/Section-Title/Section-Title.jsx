import style from "./SectionTitle.module.css";

const SectionTitle = ({ name, color = "black", cn }) => {
  return (
    <div className={`${style["section-title"]} ${style[cn]}`}>
      <p className={style["small"]}>{name}</p>
      <p className={style["big"]}>{name}</p>
    </div>
  );
};

export { SectionTitle };
