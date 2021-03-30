import "./Faq.scss";
import Accordion from "./Accordion";
import faqList from "../../texts/faq.json";
import TryItForm from "../Forms/TryItForm";

function Faq() {
  return (
    <div className="faq">
      <div className="faq--inside">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq--inside-border">
          {faqList.map((faq, i) => {
            return <Accordion header={faq.header} body={faq.body} key={i} />;
          })}
        </div>
      </div>
      <TryItForm />
    </div>
  );
}

export default Faq;
