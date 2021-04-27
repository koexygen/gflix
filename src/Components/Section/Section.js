import "./Section.scss";
import Card from "../Card/Card";
import CardTall from "../Card/CardTall";

const Section = (props) => {
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
