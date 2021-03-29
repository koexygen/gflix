import "./LandingBody.scss";
import Features from "./Features";
import Faq from "../LandingBody/Faq";

function LandingBody() {
  return (
    <div className="landing-body">
      <Features />
      <Faq />
    </div>
  );
}

export default LandingBody;
