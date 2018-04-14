import React, { Component } from "react";
import axios from "axios";
import ReactFilestack from 'filestack-react';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

import Guestlist from './Guestlist';
import EditWedding from './EditWedding';
import NavigationMenu from './NavigationMenu';
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import { getToken } from "../services/tokenService";

class WeddingAdmin extends React.Component {
      state = {
      user: "",
      loading: true
    }

  setUser = user => {
    this.setState({ user });
    this.setState({loading: false})
  };

  getCurrentUser = () => {
    const token = getToken();
    if (token) {
      axios
        .get("/user/current", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          if (res.status === 200) {
            const user = res.data.payload;
            this.setUser(user);
          }
        })
        .catch(err => {
          this.setState({loading: false})
        });
    } else {
      this.setState({loading: false})
    }
  };
  componentDidMount() {
    this.getCurrentUser();
    this.props.refresh();
  }

  render() {
    const { weddingInfo } = this.props;
    if (weddingInfo && !this.state.loading) {
      const weddingName = weddingInfo.weddingName;
      return (
          <Router>
          <div>
          <Switch>
            <Route
              exact
              path={`/${weddingName}/admin/login`}
              render={props => {
                return this.state.user ? <Redirect to={`/${weddingName}/admin`} /> : <Login getCurrentUser={this.getCurrentUser}/>;
              }}
            />
            <Route
              exact
              path={`/${weddingName}/admin/logout`}
              render={props => {
                return this.state.user ? (
                  <Logout setUser={this.setUser}/>
                ) : (
                  <Redirect to={`/${weddingName}/admin/login`} />
                );
              }}
            />
            <Route
              exact
              path={`/${weddingName}/admin/guestlist`}
              render={props => {
                return this.state.user ? (
                  <Guestlist weddingInfo={this.props.weddingInfo}/>
                ) : (
                  <Redirect to={`/${weddingName}/admin/login`} />
                );
              }}
            />
            <Route
              exact
              path={`/${weddingName}/admin`}
              render={props => {
                return this.state.user ? (
                  <EditWedding weddingInfo={this.props.weddingInfo}/>
                ) : (
                  <Redirect to={`/${weddingName}/admin/login`} />
                );
              }}
            />
           </Switch>
            </div>
          </Router>
      );
    }
    return <h2>LOADING</h2>
  }
}

export default WeddingAdmin;