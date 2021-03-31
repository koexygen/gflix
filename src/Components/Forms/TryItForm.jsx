import "./TryItForm.scss";
import RightArrow from "../../Assets/images/right-arrow.png";
import { Link } from "react-router-dom";

function TryItForm() {
  return (
    <form>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="input-btn">
        <div className="input-label" >
          <input
            type="email"
            id="email"
            required
            className="input-label--input"
            placeholder=" "
          />
          <label htmlFor="email" className="input-label--label">
            Email address
          </label>
        </div>
        <Link className="try-button" to="/signup">
          Try 30 Days Free <img src={RightArrow} alt="Try Now" />
        </Link>
      </div>
    </form>
  );
}

export default TryItForm;
