import React from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../Context/AppContext";
import API_BASE_URL from "../../config";

export default class CreateAccount extends React.Component {
  static contextType = AppContext;

  async createAccount(e) {
    e.preventDefault();

    try {
      const { email, user_name, password } = this.context;
      const body = {
        email,
        user_name,
        password,
      };

      const response = await fetch(API_BASE_URL + "auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      const { type, msg } = parseRes;
      const new_user_name = parseRes.new_user_name;

      if (parseRes.jwt_token) {
        localStorage.setItem("jwt_token", parseRes.jwt_token);
        this.context.loginUser("create", new_user_name, type, msg);
      } else {
        this.context.loginUser(null, null, type, msg);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  render() {
    return (
      <div>
        {!this.context.isAuthenticated ? (
          <>
            <h1> Create Account </h1>
            <form className="forms" onSubmit={(e) => this.createAccount(e)}>
              <label htmlFor="user_name"> Name : </label> <br />
              <input
                type="text"
                name="user_name"
                onChange={(e) => this.context.setName(e.target.value)}
                required
              />
              <br />
              <label htmlFor="email"> E - mail Address: </label> <br />
              <input
                type="email"
                name="email"
                onChange={(e) => this.context.setEmail(e.target.value)}
                required
              />
              <br />
              <label htmlFor="password"> Password: </label> <br />
              <input
                type="password"
                name="password"
                onChange={(e) => this.context.setPassword(e.target.value)}
                required
              />
              <br />
              <button type="submit"> Create Account </button>
            </form>
          </>
        ) : (
          <Redirect to="/saved-search" />
        )}
      </div>
    );
  }
}
