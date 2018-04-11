import React, { Component } from "react";
import axios from "axios";
import ReactFilestack from 'filestack-react';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

import Guestlist from './Guestlist';
import EditWedding from './EditWedding';
import NavigationMenu from './NavigationMenu';

class WeddingAdmin extends React.Component {
      state = {
      weddingInfo: {}
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

  componentDidMount() {
    this.refresh();
  }

  render() {
    const {weddingName} = this.state.weddingInfo;
    return (
        <Router>
        <div>
        <NavigationMenu weddingName={weddingName} />
        <Switch>
          <Route path={`/${weddingName}/admin/guestlist`} render={() => <Guestlist weddingInfo={this.state.weddingInfo}/>} />
          <Route path={`/${weddingName}/admin`} render={() => <EditWedding weddingInfo={this.state.weddingInfo}/>} />
          </Switch>
          </div>
        </Router>
    );
  }
}

export default WeddingAdmin;