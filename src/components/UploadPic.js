import React from "react";

import ReactFilestack from 'filestack-react';

class UploadPic extends React.Component {
	//@MEL THIS NEEDED TO BE A CLASS AND NOT A CONST. fIND OUT WHY
	render() {
	    return (
	        <div>
	         	<ReactFilestack
		            apikey={"AiNtWufS6LieOXs3fP2QTz"}
		            buttonText={this.props.buttonText}
		            buttonClass="classname"
		            onSuccess={(success) => this.props.onUploadSuccess(success, this.props.picName)}
	        	/>
	        </div>
	    )
	}
}

export default UploadPic;
