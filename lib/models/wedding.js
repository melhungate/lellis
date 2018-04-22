const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weddingSchema = new mongoose.Schema({
	weddingName: {type: String, required: true, unique: true},
	partnerFirstNameA: {type: String},
	partnerLastNameA: {type: String},
	partnerFirstNameB: {type: String},
	partnerLastNameB: {type: String},
	startDate: {type: Date}, 
	endDate: {type: Date},
    rsvpDeadline: {type: Date},
	addressLine1: {type: String},
	addressLine2: {type: String},
	addressLine3: {type: String},
	storyPic: {type: String},
    whenWherePic: {type: String},
    registryPic: {type: String},
    rsvpPic: {type: String},
    weddingAdminId: {type: String},
    registry: [{
    	name: String, 
    	link: String
    }]
    accomodations: [{
    	title: String,
    	addressLine1: String,
    	addressLine2: String,
    	addressLine3: String
    }]
});

const Wedding = mongoose.model("Wedding", weddingSchema);

module.exports = Wedding;