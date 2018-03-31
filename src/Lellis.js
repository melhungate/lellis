import React, { Component } from "react";
import axios from "axios";
import ReactFilestack from 'filestack-react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Admin from './components/Admin';
import OurWedding from './components/OurWedding';

class Lellis extends Component {
    state = {
      weddings: []
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

    componentDidMount() {
      this.refresh();
    }

  render() {
   
      return (
        <Router>
        <div>
        <Switch>
          <Route exact path='/' component={Admin} />
          <Route path='/:weddingName' component={OurWedding} />
          </Switch>
          </div>
        </Router>
      );
  }
}

export default Lellis;
