import React from "react";
import moment from "moment";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class WhenWhere extends React.Component {
	state = {
      startTime: "",
      endTime: "",
      weddingDay: "",
      displayDay: ""
    }


    componentWillReceiveProps(nextProps) {
    	//@ MEL ask how to do this right in the JSX
    	var displayDay = moment(nextProps.weddingInfo.startDate).format('ll');
		var weddingDay = moment(nextProps.weddingInfo.startDate).format('dddd, LL');
		var startTime = moment(nextProps.weddingInfo.startDate).format('LT');
		var endTime = moment(nextProps.weddingInfo.endDate).format('LT');
    	this.setState({
            startTime: startTime,
            endTime: endTime,
            weddingDay: weddingDay,
            displayDay: displayDay
  		});
  	}

	render() {
		return (
		    <div>
			   	<div className="photo-container">
	   	          	<ReactCSSTransitionGroup
			          transitionName="fade"
			          transitionAppear={true}
			          transitionAppearTimeout={700}>
			          <img src={this.props.weddingInfo.whenWherePic} className="cover" alt="When & Where Picture"/>
			        </ReactCSSTransitionGroup>
			   		<h1 className="centered">{this.state.displayDay}</h1>

		        </div>
		        <h2 className="text-align-center">Ceremony and Reception</h2>
				<h3 className="text-align-center">{this.state.weddingDay}</h3>
				<h3 className="text-align-center">{this.state.startTime} - {this.state.endTime}</h3>
				<p>{this.props.weddingInfo.addressLine1}</p>
				<p>{this.props.weddingInfo.addressLine2}</p>
				<p>{this.props.weddingInfo.addressLine3}</p>
				<h2 className="text-align-center">Ceremony and Reception</h2>
				<h3 className="text-align-center">Group rates are available at both hotels. Just mention our names</h3>
				<p>@mel INSERT ACCOMMODATIONS INFO HERE</p>
		    </div>
		)
	}
}

export default WhenWhere;