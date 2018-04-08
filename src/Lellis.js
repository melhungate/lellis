import React, { Component } from "react";
import axios from "axios";
import ReactFilestack from 'filestack-react';
import './Lellis.css';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

import Admin from './components/Admin';
import OurWedding from './components/OurWedding';
import CreateWedding from './components/CreateWedding';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import { getToken } from "./services/tokenService";

class Lellis extends Component {
    state = {
      weddings: [],
      user: null
    }

  refresh = () => {
    // get all weddings from the backend 
    axios.get("/weddings").then(res => {
      const data = res.data;
      // if blog guests come back
      if (data.payload) {
        //debugger;
        // store them in state
        this.setState({ weddings: data.payload });
      }
    });
  };

  setUser = user => {
    this.setState({ user });
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
    }
  };

    componentDidMount() {
      this.refresh();
      this.getCurrentUser();
    }

  render() {
   
      return (
        <Router>
        <div>
        <Switch>
          <Route exact path='/' component={CreateWedding} />
          <Route path='/admin' component={Admin}/>
          <Route path='/:weddingName' component={OurWedding} />
          </Switch>
          </div>
        </Router>
      );
  }
}

export default Lellis;
