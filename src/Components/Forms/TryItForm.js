import { useState } from "react";
import { connect } from "react-redux";
import "./TryItForm.scss";
import RightArrow from "../../Assets/images/right-arrow.png";
import { useHistory } from "react-router-dom";
import { getTryMail } from "../../Actions";

const TryItForm = ({ getTryMail }) => {
  const [email, setEmail] = useState("");
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getTryMail(email);
    history.push("/signup");
  };
  return (
    <form className="try-it-form" onSubmit={handleSubmit}>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="input-btn">
        <div className="input-label">
          <input
            type="email"
            id="email"
            required
            className="input-label--input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder=" "
          />
          <label htmlFor="email" className="input-label--label">
            Email address
          </label>
        </div>
        <button type="submit" className="try-button">
          Try 30 Days Free <img src={RightArrow} alt="Try Now" />
        </button>
      </div>
    </form>
  );
};

export default connect(null, { getTryMail })(TryItForm);
