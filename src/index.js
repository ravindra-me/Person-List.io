import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

const Person = ({ name, img, job, childern }) => {
  const url = `https://randomuser.me/api/portraits/med/men/${img}.jpg`;
  return (
    <article className="Person">
      <img src={url} alt="" />
      <h4>{name}</h4>
      <h4>{job}</h4>
    </article>
  );
};
const PersonList = () => {
  return (
    <section className="Person-List">
      <Person img="75" name="ravindra " job="developer" />
      <Person img="62" name="ravindra " job="developer" />
      <Person img="61" name="ravindra " job="developer" />
    </section>
  );
};
ReactDOM.render(<PersonList />, document.getElementById("root"));
