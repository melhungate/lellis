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
      weddingInfo: {},
      loading: true
    }

  refresh = () => {
    // get all weddings from the backend 
    axios.get(`/weddings/${this.props.match.params.weddingName}`).then(res => {
      const data = res.data;
      // if blog guests come back
      if (data.payload) {
        //debugger;
        // store them in state
        console.log(data.payload);
        this.setState({ weddingInfo: data.payload});
      }
    });
  };
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
        });
    } else {
      this.setState({loading: false})
    }
  };
  componentDidMount() {
    this.refresh();
    this.getCurrentUser();
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>
    const {weddingName} = this.state.weddingInfo;
    return (
        <Router>
        <div>
        <NavigationMenu weddingName={weddingName} />
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
                <Guestlist weddingInfo={this.state.weddingInfo}/>
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
                <EditWedding weddingInfo={this.state.weddingInfo}/>
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
}

export default WeddingAdmin;