import React from "react";

import ReactFilestack from 'filestack-react';

class Loading extends React.Component {
	//@MEL THIS NEEDED TO BE A CLASS AND NOT A CONST. fIND OUT WHY
	render() {
	    return (
	        <div className="main-content">
	         	<h1 className="dark">LOADING</h1>
	        </div>
	    )
	}
}

export default Loading;
