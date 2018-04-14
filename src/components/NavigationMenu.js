import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavigationMenu = ({ weddingName }) => (
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
		          <Link className="Header-nav-item" to={`/${weddingName}`}>Our Story</Link>
		          <Link className="Header-nav-item" to={`/${weddingName}/whenwhere`}>When & Where</Link>
		          <Link className="Header-nav-item" to={`/${weddingName}/registry`}>Registry</Link>
		          <Link className="Header-nav-item" to={`/${weddingName}/rsvp`}>RSVP</Link>
		        </div>
	      	</div>
        </div>
    </div>
);

export default NavigationMenu;
