import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavigationMenu = ({ weddingName }) => (
	//@mel FIND OUT WHY THIS DOESN'T WORK - LINK WOULD CHANGE BUT IT WOULDNT LOAD PAGE
      <Router>
      <div>
        <ul> 
          <Link to={`/${weddingName}`}>Our Home</Link>
          <Link to={`/${weddingName}/whenwhere`}>When & Where</Link>
          <Link to={`/${weddingName}/registry`}>Registry</Link>
          <Link to={`/${weddingName}/rsvp`}>RSVP</Link>
        </ul>
      </div>
      </Router>
);

export default NavigationMenu;
