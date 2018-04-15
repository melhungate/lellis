import React, { Component } from "react";
import axios from "axios";
import Guest from './Guest';
import CreateGuest from './CreateGuest';
import moment from "moment";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';

class Rsvp extends React.Component {
  render() { //@mel - could this be a const? 
    const { weddingInfo } = this.props;
    return (
      <div>
        <NavigationMenu weddingName={weddingInfo.weddingName} />
        <div className="photo-container">
          <ReactCSSTransitionGroup
              transitionName="fade"
              transitionAppear={true}
              transitionAppearTimeout={700}>
              <img src={this.props.weddingInfo.rsvpPic}  className="cover" alt="RSVP Picture"/>
          </ReactCSSTransitionGroup>       
          <h1 className="centered">RSVP</h1>
        </div>
        <div className="main-content">
        <div className="form-title-div">
          <h2 className="text-align-center">We're so excited to celebrate with you!</h2>
          <h3 className="text-align-center">Kindly respond by {moment(weddingInfo.rsvpDeadline).format('ll')}</h3>
        </div>
        <CreateGuest weddingId={this.props.weddingInfo._id}/>
        </div>
        <Footer weddingName={weddingInfo.weddingName} />
      </div>
    );
  }
}

export default Rsvp;