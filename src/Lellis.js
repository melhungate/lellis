import React, { Component } from "react";
import axios from "axios";
import ReactFilestack from 'filestack-react';
import './Lellis.css';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
import Signup from "./components/Signup";
import Admin from './components/Admin';
import OurWedding from './components/OurWedding';
import WeddingAdmin from './components/WeddingAdmin';
import CreateWedding from './components/CreateWedding';

class Lellis extends Component {
    state = {
      weddings: []
    }

  refresh = () => {
    // get all weddings from the backend 
    axios.get("/weddings").then(res => {
      const data = res.data;
      if (data.payload) {
        this.setState({ weddings: data.payload });
      }
    });
  };

  componentDidMount() {
    this.refresh();
  }

  render() {
      return ( <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route exact path='/signup' component={Signup} />
          <Route path='/signup/info' component={CreateWedding} />
          <Route path='/:weddingName/admin' component={WeddingAdmin} />
          <Route path='/:weddingName' component={OurWedding} />
          </Switch>
          </div>
        </Router>
      );
  }
}

export default Lellis;
