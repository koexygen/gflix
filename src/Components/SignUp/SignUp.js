import "./SignUp.scss";
import SignUpForm from "../Forms/SignUpForm";
import bgImg from "../../Assets/images/header-bg.jpg";
import Footer from "../Footer/Footer";

const SignUp = (props) => {
  return (
    <div className="login">
      <SignUpForm />
      <img src={bgImg} alt="Banner" className="login-bg-image" />
      <div className="login--footer">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
