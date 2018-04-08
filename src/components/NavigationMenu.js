import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavigationMenu = ({ weddingName }) => (
  //@mel FIND OUT WHY THIS DOESN'T WORK - LINK WOULD CHANGE BUT IT WOULDNT LOAD PAGE
      <div className="Header-nav"> 
          <a className="Header-nav-item" href={`/${weddingName}`}>Our Home</a>
          <a className="Header-nav-item" href={`/${weddingName}/whenwhere`}>When & Where</a>
          <a className="Header-nav-item" href={`/${weddingName}/registry`}>Registry</a>
          <a className="Header-nav-item" href={`/${weddingName}/rsvp`}>RSVP</a>
        </div>
);

export default NavigationMenu;
