import React, { Component } from "react";
import axios from "axios";
import Guest from './Guest';
import CreateGuest from './CreateGuest';

class Rsvp extends React.Component {
  render() { //@mel - could this be a const? 
    return (
      <div>
        <h1>RSVP</h1>
        <img src={this.props.weddingInfo.rsvpPic} alt="RSVP Picture"/>
        <h2>We're so excited to celebrate with you!</h2>
        <h3>Kindly response by ...@mel - INSERT RSVP DEADLINE DATE HERE</h3>
        <CreateGuest weddingId={this.props.weddingInfo._id}/>
      </div>
    );
  }
}

export default Rsvp;