import "./Faq.scss";
import Accordion from "./Accordion";
import faqList from "../../texts/faq.json";

function Faq() {
  return (
    <div className="faq">
      <div className="faq--inside">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq--inside-border">
          {faqList.map((faq) => {
            return <Accordion header={faq.header} body={faq.body} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;
