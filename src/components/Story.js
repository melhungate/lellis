import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Story = ({weddingInfo}) => {
	console.log(weddingInfo);

    return (
        <div className="photo-container" >
	   	    <ReactCSSTransitionGroup
	          	transitionName="fade"
	          	transitionAppear={true}
	          	transitionAppearTimeout={700}>
        		<img src={weddingInfo.storyPic}  className="cover" alt="Story Picture"/>
	        </ReactCSSTransitionGroup>
        	<h1 className="centered">{weddingInfo.partnerFirstNameA} & {weddingInfo.partnerFirstNameB}</h1>
        </div>
			
    )
}

export default Story;
