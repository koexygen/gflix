import "./Section.scss";
import CardTall from "../Card/CardTall";
import Card from "../Card/Card";

const Section = ({ allContent, tall }) => {
  const renderCards = (cards) => {
    return cards.map((card, i) => {
      return tall ? (
        <CardTall card={card} key={i} />
      ) : (
        <Card card={card} key={i} />
      );
    });
  };

  return (
    <div
      className="section"
      style={{ transform: `translateY(${tall ? "-25%" : "0"})` }}
    >
      <ul className="section--inner">
        {allContent ? renderCards(allContent) : null}
      </ul>
    </div>
  );
};

export default Section;
