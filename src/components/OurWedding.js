import React, { Component } from "react";
import axios from "axios";
import ReactFilestack from 'filestack-react';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

import Story from './Story';
import Rsvp from './Rsvp';
import WhenWhere from './WhenWhere';
import Registry from './Registry';
import Admin from './Admin';
import Guestlist from './Guestlist';
import EditWedding from './EditWedding';
import NavigationMenu from './NavigationMenu';

class OurWedding extends React.Component {
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
        <h1>{this.state.weddingInfo.partnerFirstNameA} {this.state.weddingInfo.partnerLastNameA} & {this.state.weddingInfo.partnerFirstNameB} {this.state.weddingInfo.partnerLastNameB}</h1>
        <NavigationMenu weddingName={weddingName} />
        <Switch>
          <Route exact path={`/${weddingName}`} render={() => <Story weddingInfo={this.state.weddingInfo}/>}/>
          <Route path={`/${weddingName}/whenwhere`} render={() => <WhenWhere weddingInfo={this.state.weddingInfo}/>} />
          <Route path={`/${weddingName}/registry`} render={() => <Registry weddingInfo={this.state.weddingInfo}/>} />
          <Route path={`/${weddingName}/rsvp`} render={() => <Rsvp weddingInfo={this.state.weddingInfo}/>} />
          <Route path={`/${weddingName}/guestlist`} render={() => <Guestlist weddingInfo={this.state.weddingInfo}/>} />
          <Route path={`/${weddingName}/edit`} render={() => <EditWedding weddingInfo={this.state.weddingInfo}/>} />
          </Switch>
          </div>
        </Router>
    );
  }
}

export default OurWedding;