import "./Section.scss";
import CardTall from "../Card/CardTall";
import { getContent } from "../../Api";

const Section = ({ allContent, tall }) => {
  if (allContent) {
    getContent(allContent[2].id).then((resp) => {
      console.log(resp);
    });
  }

  const renderCards = (cards) => {
    return cards.map((card, i) => {
      return <CardTall card={card} key={i} />;
    });
  };
  return (
    <div
      className="section"
      style={{ transform: `translateY(${tall ? "-45%" : "0"})` }}
    >
      <ul className="section--inner">
        {allContent ? renderCards(allContent) : null}
      </ul>
    </div>
  );
};

export default Section;
