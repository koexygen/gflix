import "./TryItForm.scss";
import RightArrow from "../../Assets/images/right-arrow.png";

function TryItForm() {
  return (
    <form>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="input-btn">
        <input type="text" placeholder="Email address" />
        <button>
          Try 30 Days Free <img src={RightArrow} alt="Try Now" />
        </button>
      </div>
    </form>
  );
}

export default TryItForm;
