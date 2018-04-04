import React from "react";

const Story = ({weddingInfo}) => {
	console.log(weddingInfo);

    return (
        <div>
        	<h1>Our Story</h1>
			<p>{weddingInfo.partnerFirstNameA} {weddingInfo.partnerLastNameA} & {weddingInfo.partnerFirstNameB} {weddingInfo.partnerLastNameB}</p>
			<img src={weddingInfo.storyPic} alt="Our Story Picture"/>
        </div>
    )
}

export default Story;
