import React from "react";
import moment from "moment";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';

class WhenWhere extends React.Component {
	render() {
		const { weddingInfo } = this.props;
		if (weddingInfo) {
			return (
			    <div>
	    			<NavigationMenu weddingName={weddingInfo.weddingName} />
				   	<div className="photo-container">
		   	          	<ReactCSSTransitionGroup
				          transitionName="fade"
				          transitionAppear={true}
				          transitionAppearTimeout={700}>
				          <img src={weddingInfo.whenWherePic} className="cover" alt="When & Where Picture"/>
				        </ReactCSSTransitionGroup>
				   		<h1 className="centered">{moment(weddingInfo.startDate).format('ll')}</h1>

			        </div>
			        <div className="main-content">
				        <h2 className="text-align-center">Ceremony and Reception</h2>
						<h3 className="text-align-center">{moment(weddingInfo.startDate).format('dddd, LL')}</h3>
						<h3 className="text-align-center">{moment(weddingInfo.startDate).format('LT')} - {moment(weddingInfo.endDate).format('LT')}</h3>
						<p className="text-align-center">
						 	<em>{weddingInfo.addressLine1}</em>
						 	<br />
							{weddingInfo.addressLine2}
							<br />
							{weddingInfo.addressLine3}
						</p>
					</div>
					<Footer weddingName={weddingInfo.weddingName} />
			    </div>
			)
		}
		return <div>Loading...</div>
		
	}
}

export default WhenWhere;