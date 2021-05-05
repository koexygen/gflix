import "./Section.scss";
import CardTall from "../Card/CardTall";
import Card from "../Card/Card";

const Section = ({ allContent, tall, watchListClass }) => {
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
      className={`section`}
      style={{ transform: `translateY(${tall ? "-25%" : "0"})` }}
    >
      <span>Movies</span>
      <ul
        className={`section--inner  ${
          watchListClass ? "section--watchlist" : null
        }`}
      >
        {allContent ? renderCards(allContent) : null}
      </ul>
    </div>
  );
};

export default Section;
