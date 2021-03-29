import "./Faq.scss";
import Accordion from "./Accordion";

function Faq() {
  return (
    <div className="faq">
      <div className="faq--inside">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq--inside-border">
          <Accordion
            header="What is Netflix?"
            body="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          />
        </div>
      </div>
    </div>
  );
}

export default Faq;
