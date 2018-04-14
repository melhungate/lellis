import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Registry = ({weddingInfo}) => {
    return (
        <div>
	        <div className="photo-container">
	   	    <ReactCSSTransitionGroup
	          	transitionName="fade"
	          	transitionAppear={true}
	          	transitionAppearTimeout={700}>
        		<img src={weddingInfo.registryPic} className="cover" alt="Registry Picture"/>
	        </ReactCSSTransitionGroup>
	            <h1 className="centered">Registry</h1>
	        </div>
	    </div>
    )
}

export default Registry;
