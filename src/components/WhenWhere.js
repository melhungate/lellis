import React from "react";
import moment from "moment";

class WhenWhere extends React.Component {
	state = {
      startTime: "",
      endTime: "",
      weddingDay: ""
    }


    componentWillReceiveProps(nextProps) {
    	//@ MEL ask how to do this right in the JSX
		var weddingDay = moment(nextProps.weddingInfo.startDate).format('dddd, LL');
		var startTime = moment(nextProps.weddingInfo.startDate).format('LT');
		var endTime = moment(nextProps.weddingInfo.endDate).format('LT');
    	this.setState({
            startTime: startTime,
            endTime: endTime,
            weddingDay: weddingDay
  		});
  	}

	render() {
		return (
		    <div>
		        <h1>When & Where</h1>
				<img src={this.props.weddingInfo.whenWherePic} alt="When & Where Picture"/>
				<h2>Ceremony and Reception</h2>
				<h3>{this.state.weddingDay}</h3>
				<h3>{this.state.startTime} - {this.state.endTime}</h3>
				<p>{this.props.weddingInfo.addressLine1}</p>
				<p>{this.props.weddingInfo.addressLine2}</p>
				<p>{this.props.weddingInfo.addressLine3}</p>
				<h2>Ceremony and Reception</h2>
				<h3>Group rates are available at both hotels. Just mention our names</h3>
				<p>@mel INSERT ACCOMMODATIONS INFO HERE</p>
		    </div>
		)
	}
}

export default WhenWhere;