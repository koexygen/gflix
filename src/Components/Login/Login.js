import "./Login.scss";
import Footer from "../Footer/Footer";
import LoginForm from "../Forms/LoginForm";
import bgImg from "../../Assets/images/header-bg.jpg";

const Login = () => {
  return (
    <div className="login">
      <LoginForm />
      <img src={bgImg} alt="Banner" className="login-bg-image" />
      <div className="login--footer">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
