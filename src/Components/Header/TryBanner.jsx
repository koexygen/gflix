import "./TryBanner.scss";
import TryItForm from "../Forms/TryItForm";

function TryBanner() {
  return (
    <div className="try-banner">
      <h1 className="try-banner-title">
        Unlimited movies, TV shows, and more.
      </h1>
      <h2 className="try-banner-subtitle">Watch anywhere. Cancel anytime.</h2>
      <TryItForm />
      <h3>Only new members are eligible for this offer.</h3>
    </div>
  );
}

export default TryBanner;
