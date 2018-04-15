import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavigationAdmin = ({ weddingName }) => (
  	<div className="Header-inner Header-inner--top">
  		<div className="align-left">
	  	  <div className="Header-nav"> 
	      	<div className="Header-nav-inner">
	          <Link className="Header-nav-item Header-branding" to={`/${weddingName}`}>{weddingName}</Link>
	        </div>
	      </div>
      	</div>
      	<div className="align-right">
	      	<div className="Header-nav align-right"> 
		      	<div className="Header-nav-inner">
		          <Link className="Header-nav-item" to={`/${weddingName}/admin/guestlist`}>Guestlist</Link>
		          <Link className="Header-nav-item" to={`/${weddingName}/admin/logout`}>Logout</Link>
		        </div>
	      	</div>
        </div>
    </div>
);

export default NavigationAdmin;
