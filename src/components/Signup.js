import React, { Component } from "react";
import axios from "axios";
import { setToken } from "../services/tokenService";
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';


class Signup extends Component {
  state = {
    email: "",
    password: "",
    fireRedirect: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post("/auth/signup", {
        email,
        password
      })
      .then(res => {
        if (res.status === 200) {
          const token = res.data.payload;
          setToken(token);
          this.setState({ fireRedirect: true });
         // this.props.getCurrentUser();
        }
      });
  };

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              onChange={this.handleChange}
              name="email"
              id="email"
              placeholder="email"
            />
          </div>
          <div>
            <label htmlFor="email">Password: </label>
            <input
              type="password"
              onChange={this.handleChange}
              name="password"
              id="password"
              placeholder="Enter your desired password"
            />
          </div>
          <div>
            <input type="submit" value="Signup" />
          </div>
        </form>
        {fireRedirect && (
          <Redirect to={from || 'signup/info'}/>
        )}
        </div>
    );
  }
}

export default Signup;