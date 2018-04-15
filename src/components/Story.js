import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';

const Story = ({weddingInfo}) => {
    return (
    	<div>
	    	<NavigationMenu weddingName={weddingInfo.weddingName} />
	        <div className="photo-container" >
		   	    <ReactCSSTransitionGroup
		          	transitionName="fade"
		          	transitionAppear={true}
		          	transitionAppearTimeout={700}>
	        		<img src={weddingInfo.storyPic}  className="cover" alt="Story Picture"/>
		        </ReactCSSTransitionGroup>
	        	<h1 className="centered">{weddingInfo.partnerFirstNameA} & {weddingInfo.partnerFirstNameB}</h1>
	        </div>
	        <Footer weddingName={weddingInfo.weddingName} />
        </div>
			
    )
}

export default Story;
