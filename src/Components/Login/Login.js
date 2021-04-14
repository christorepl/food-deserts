import React from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../Context/AppContext";
import API_BASE_URL from "../../config";

export default class Login extends React.Component {
  static contextType = AppContext;

  onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = this.context;
      const body = {
        email,
        password,
      };
      const response = await fetch(API_BASE_URL + "auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      const { type, msg, user_name } = parseRes;

      if (parseRes.jwt_token) {
        localStorage.setItem("jwt_token", parseRes.jwt_token);
        this.context.loginUser("login", user_name, type, msg);
      } else {
        this.context.loginUser(null, null, type, msg);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
      <>
        {!this.context.isAuthenticated ? (
          <form className="forms" onSubmit={(e) => this.onSubmitLogin(e)}>
            <label htmlFor="email"> E - mail Address : </label> <br />
            <input
              type="email"
              name="email"
              required
              value={this.context.email}
              onChange={(e) => this.context.setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password"> Password: </label> <br />
            <input
              type="password"
              name="password"
              required
              value={this.context.password}
              onChange={(e) => this.context.setPassword(e.target.value)}
            />
            <br />
            <button type="submit"> Login </button>
            <p>
              For testing, try using the these credentials: E - mail: test
              @test.com - Password: testuser
            </p>
          </form>
        ) : (
          <Redirect to="/home" />
        )}
      </>
    );
  }
}
