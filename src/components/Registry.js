import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';

const Registry = ({weddingInfo}) => {
    return (
        <div>
	    	<NavigationMenu weddingName={weddingInfo.weddingName} />
	        <div className="photo-container">
	   	    <ReactCSSTransitionGroup
	          	transitionName="fade"
	          	transitionAppear={true}
	          	transitionAppearTimeout={700}>
        		<img src={weddingInfo.registryPic} className="cover" alt="Registry Picture"/>
	        </ReactCSSTransitionGroup>
	            <h1 className="centered">Registry</h1>
	        </div>
        	<Footer weddingName={weddingInfo.weddingName} />
	    </div>
    )
}

export default Registry;
