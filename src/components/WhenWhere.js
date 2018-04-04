import React from "react";
import moment from "moment";

class WhenWhere extends React.Component {
	state = {
      day: "",
      month: "",
      date: "",
      year: "",
      startTime: "",
      endTime: ""
    }


    componentWillReceiveProps(nextProps) {
    	var eventDate = new Date(nextProps.weddingInfo.startDate);
    	var day = eventDate.getDay();
    	var month = eventDate.getMonth();
		var date = eventDate.getDate();
		var year = eventDate.getFullYear();
		var startTime = moment(eventDate).format('LT');
		var endTime = moment(nextProps.weddingInfo.endDate).format('LT');
    	var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var dayName = weekdays[day];
		var monthName = months[month];
    	this.setState({
            day: dayName,
            month: monthName, 
            date: date,
            year: year,
            startTime: startTime,
            endTime: endTime
  		});
  	}

	render() {
		return (
		    <div>
		        <h1>When & Where</h1>
				<img src={this.props.weddingInfo.whenWherePic} alt="When & Where Picture"/>
				<h2>Ceremony and Reception</h2>
				<h3>{this.state.day}, {this.state.month} {this.state.date}, {this.state.year}</h3>
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