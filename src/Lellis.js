import React, { Component } from "react";
import axios from "axios";
import ReactFilestack from 'filestack-react';
import './Lellis.css';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
import Signup from "./components/Signup";
import AllWeddings from './components/AllWeddings';
import OurWedding from './components/OurWedding';
import WeddingAdmin from './components/WeddingAdmin';
import CreateWedding from './components/CreateWedding';

class Lellis extends Component {
    state = {
      weddings: [],
      fireRedirect: false,
      newWeddingName: ""
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

  fireRedirect = () => {
    console.log("im firing");
    this.setState({fireRedirect: true})
  };

  setWeddingName = (newWeddingName) => {
    console.log("new wedding");
    console.log(newWeddingName);
    this.setState({newWeddingName: newWeddingName})
    this.setState({fireRedirect: true})
  };


  render() {
      return ( <Router>
        <div>
        <Switch>
          <Route exact path="/" component={AllWeddings} />
          <Route exact path='/signup' component={Signup} />
          <Route
            path={'/signup/info'}
            render={props => {
              return this.state.fireRedirect ? (
                <Redirect to={`/${this.state.newWeddingName}`} component={OurWedding}/>
              ) : (
                <CreateWedding fireRedirect={this.fireRedirect} setWeddingName={this.setWeddingName} />
              );
            }}
          />
          <Route path='/:weddingName' component={OurWedding} />
          </Switch>
          </div>
        </Router>
      );
  }
}

export default Lellis;
