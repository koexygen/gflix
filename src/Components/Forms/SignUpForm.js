import React, { Component } from "react";
import "./LoginForm.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../Actions";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = { userName: "", password: "", passwordHash: "", email: "" };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    debugger;
    let { userName, password, email } = this.state;
    let passwordHash = password;

    this.props.signup(userName, email, password, passwordHash);
  };

  renderErrors = (errors) => {
    return errors[0].map((error, i) => (
      <span className="login-form-input-error" key={i}>
        {error}
      </span>
    ));
  };

  render() {
    return (
      <div className="login-form">
        <h1 className="login-form-title">Sign Up</h1>
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
          </div>
          <div className="login-form-input">
            <div className="login-form-input-group">
              <input
                type="email"
                name="email"
                placeholder=" "
                id="email"
                value={this.state.email}
                required
                onChange={(e) => this.handleChange(e)}
              />
              <label htmlFor="username">Email</label>
            </div>
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
            {this.props.errors ? this.renderErrors(this.props.errors) : null}
          </div>

          <button className="submit">Sign Up</button>
        </form>

        <p className="login-form-text">
          Already a user? <Link to="/login">Sign in now.</Link>
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

export default connect(mapStateToProps, { signup })(SignUp);
