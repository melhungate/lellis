import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavigationMenu = ({ weddingName }) => (
  //@mel FIND OUT WHY THIS DOESN'T WORK - LINK WOULD CHANGE BUT IT WOULDNT LOAD PAGE
  	<div className="Header-inner Header-inner--top">
  		<div className="align-left">
	  	  <div className="Header-nav"> 
	      	<div className="Header-nav-inner">
	          <a className="Header-nav-item Header-branding">{weddingName}</a>
	        </div>
	      </div>
      	</div>
      	<div className="align-right">
	      	<div className="Header-nav align-right"> 
		      	<div className="Header-nav-inner">
		          <a className="Header-nav-item" href={`/${weddingName}`}>Our Story</a>
		          <a className="Header-nav-item" href={`/${weddingName}/whenwhere`}>When & Where</a>
		          <a className="Header-nav-item" href={`/${weddingName}/registry`}>Registry</a>
		          <a className="Header-nav-item" href={`/${weddingName}/rsvp`}>RSVP</a>
		        </div>
	      	</div>
        </div>
    </div>
);

export default NavigationMenu;
