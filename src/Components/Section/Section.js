import "./Section.scss";
import Card from "../Card/Card";

const Section = () => {
  return (
    <div className="section">
      <ul className="section--inner">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
};

export default Section;
