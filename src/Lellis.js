import React, { Component } from "react";
import axios from "axios";
import Story from './components/Story';
import Rsvp from './components/Rsvp';
import WhenWhere from './components/WhenWhere';
import Registry from './components/Registry';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Lellis extends Component {
    state = {
      weddings: []
    }

  refresh = () => {
    // get all weddings from the backend 
    axios.get("/guests").then(res => {
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
          <Route exact path='/' render={() => <Story weddings={this.state.weddings}/>} />
          <Route path='/whenwhere' component={WhenWhere} />
          <Route path='/registry' component={Registry} />
          <Route path='/rsvp' component={Rsvp} />
          </div>
        </Router>
      );
  }
}

export default Lellis;
