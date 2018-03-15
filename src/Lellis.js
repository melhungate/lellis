import React, { Component } from "react";
import axios from "axios";
import Guest from './components/Guest';
import CreateGuest from './components/CreateGuest';

class Lellis extends Component {

  state = {
    guests: []
  }

refresh = () => {
  // get all block guests from the backend 
  axios.get("/guests").then(res => {
    const data = res.data;
    // if blog guests come back
    if (data.payload) {
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
        <div className="guests">
          {this.state.guests.map(guest => <Guest {...guest} />)}
          <CreateGuest refresh={this.refresh} />
        </div>
      );
  }
}

export default Lellis;
