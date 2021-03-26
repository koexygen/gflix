import "./TryItForm.scss";
import RightArrow from "../../Assets/images/right-arrow.png";

function TryItForm() {
  return (
    <form>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <input type="text" placeholder="Email address" />
      <button>
        Get Started <img src={RightArrow} alt="Try Now" />
      </button>
    </form>
  );
}

export default TryItForm;
