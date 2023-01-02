import DecorateImage from "../../assets/images/robot.png";
import style from "./UserForm.module.css";

const UserForm = () => {
  return (
    <section>
      <div className={"container"}>
        <div className={style["user-form-wrapper"]}>
          <form>
            <h2>Let’s talk about your project</h2>
            <p>
              Discuss the detaillsDiscuss the detaillsDiscuss the
              detaillsDiscuss the detaillsDiscuss the detaillsDiscuss the
              detaillsDiscuss the detaills
            </p>
            <div className={style["form-fields"]}>
              <label>
                <input
                  type={"text"}
                  name={"user-name"}
                  placeholder={"Full Name"}
                />
              </label>
              <label>
                <input
                  type={"text"}
                  name={"user-mail"}
                  placeholder={"E-mail"}
                />
              </label>
              <label>
                <input
                  type={"text"}
                  name={"user-message"}
                  placeholder={"Message"}
                />
              </label>
              <label>
                <input type={"file"} name={"user-file"} placeholder={"File"} />
              </label>
            </div>

            <input
              type={"submit"}
              value={"Contact Us"}
              className={style["contact-button"]}
            />
          </form>
          <img src={DecorateImage} width={500} />
        </div>
      </div>
    </section>
  );
};

export { UserForm };
