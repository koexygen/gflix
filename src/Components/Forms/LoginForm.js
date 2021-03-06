import React, { Component } from "react";
import "./LoginForm.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../Actions";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { userName: "", password: "" };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { userName, password } = this.state;
    this.props.login(userName, password);
    this.setState({ userName: "", password: "" });
  };

  renderErrors = (errors = []) => {
    return errors.map((error, i) => (
      <span className="login-form-input-error" key={i}>
        {error}
      </span>
    ));
  };

  render() {
    return (
      <div className="login-form">
        <h1 className="login-form-title">Sign In</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="login-form-input">
            <div className="login-form-input-group">
              <input
                type="text"
                name="userName"
                placeholder=" "
                id="username"
                value={this.state.userName}
                required
                onChange={(e) => this.handleChange(e)}
              />
              <label htmlFor="username">Username</label>
            </div>
            {this.renderErrors(this.props.errors)}
          </div>

          <div className="login-form-input">
            <div className="login-form-input-group">
              <input
                type="password"
                placeholder=" "
                id="password"
                name="password"
                value={this.state.password}
                required
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            {this.renderErrors(this.props.errors)}
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
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.user.errors,
  };
};

export default connect(mapStateToProps, { login })(LoginForm);
