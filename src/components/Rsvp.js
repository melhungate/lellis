import React, { Component } from "react";
import axios from "axios";
import Guest from './Guest';
import CreateGuest from './CreateGuest';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Rsvp extends React.Component {
  render() { //@mel - could this be a const? 
    return (
      <div>
        <div className="photo-container">
          <ReactCSSTransitionGroup
              transitionName="fade"
              transitionAppear={true}
              transitionAppearTimeout={700}>
              <img src={this.props.weddingInfo.rsvpPic}  className="cover" alt="RSVP Picture"/>
          </ReactCSSTransitionGroup>       
          <h1 className="centered">RSVP</h1>
        </div>
        <h2>We're so excited to celebrate with you!</h2>
        <h3>Kindly response by ...@mel - INSERT RSVP DEADLINE DATE HERE</h3>
        <CreateGuest weddingId={this.props.weddingInfo._id}/>
      </div>
    );
  }
}

export default Rsvp;