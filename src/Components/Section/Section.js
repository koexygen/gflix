import "./Section.scss";
import Card from "../Card/Card";
import CardTall from "../Card/CardTall";
import { getContent } from "../../Actions";

const Section = (props) => {
  if (props.allContent) {
    getContent(props.allContent[2].id).then((resp) => {
      debugger;
    });
  }
  return (
    <div
      className="section"
      style={{ transform: `translateY(${props.tall ? "-45%" : "0"})` }}
    >
      <ul className="section--inner">
        <CardTall />
        <CardTall />
        <CardTall />
        <CardTall />
        <CardTall />
      </ul>
    </div>
  );
};

export default Section;
