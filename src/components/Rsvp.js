import React, { Component } from "react";
import axios from "axios";
import Guest from './Guest';
import CreateGuest from './CreateGuest';

class Rsvp extends React.Component {
  state = {
    guests: []
  }

refresh = () => {
  // get all block guests from the backend 
  axios.get("/guests").then(res => {
    const data = res.data;
    // if blog guests come back
    if (data.payload) {
      //debugger;
      // store them in state
      this.setState({ guests: data.payload });
    }
  });
};

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
          <CreateGuest refresh={this.refresh} />
        <div className="guests">
          {this.state.guests.map( guest => <Guest key={guest._id}{...guest} />)}
          </div>
      </div>
    );
  }
}

export default Rsvp;