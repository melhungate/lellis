import React, { Component } from "react";
import axios from "axios";
import Guest from './Guest';
import CreateGuest from './CreateGuest';

class Rsvp extends React.Component {
  state = {
    guests: []
  }

refresh = () => {
  // this.refresh is being passed into CreateGuest and I'm unsure how this will work?
  // I also need to pass in weddingInfo._id into CreateGuest since on Post I need to link the guest to the wedding.
  
  axios.get(`/guests/${this.props.weddingInfo._id}`)
  .then(res => {
    const data = res.data;
    // if blog guests come back
    if (data.payload) {
      // store them in state
      this.setState({ guests: data.payload });
    }
  });

};

  componentWillReceiveProps(nextProps) {
     if (nextProps.weddingInfo._id) {
         axios.get(`/guests/${nextProps.weddingInfo._id}`)
           .then(res => {
              const data = res.data;
              // if blog guests come back
              if (data.payload) {
                // store them in state
                this.setState({ guests: data.payload });
              }
            });
     }
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <h1>RSVP</h1>
        <img src={this.props.weddingInfo.rsvpPic} alt="RSVP Picture"/>
        <h2>We're so excited to celebrate with you!</h2>
        <h3>Kindly response by ...@mel - INSERT RSVP DEADLINE DATE HERE</h3>
        <CreateGuest refresh={this.refresh} weddingId={this.props.weddingInfo._id}/>
        <div className="guests">
          {this.state.guests.map( guest => <Guest key={guest._id}{...guest} />)}
          </div>
      </div>
    );
  }
}

export default Rsvp;