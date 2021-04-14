import "./LoginForm.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../Actions";

const LoginForm = (props) => {
  return (
    <div className="login-form">
      <h1 className="login-form-title">Sign In</h1>
      <form autoComplete="off" onSubmit={props.login}>
        <div className="login-form-input">
          <div className="login-form-input-group">
            <input type="email" placeholder=" " id="email" required />
            <label htmlFor="email">Email address</label>
          </div>
        </div>

        <div className="login-form-input">
          <div className="login-form-input-group">
            <input type="password" placeholder=" " id="password" required />
            <label htmlFor="password">Password</label>
          </div>
        </div>

        <button className="submit">Sign In</button>
      </form>

      <p className="login-form-text">
        New to Netflix? <Link to="/signup">Sign up now.</Link>
      </p>

      <p className="login-form-text-small">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <a
          href="https://www.google.com/recaptcha/about/"
          target="_blank"
          rel="noreferrer"
        >
          Learn more.
        </a>
      </p>
    </div>
  );
};

export default connect(null, { login })(LoginForm);
