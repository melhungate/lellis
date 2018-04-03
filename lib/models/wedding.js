const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weddingSchema = new mongoose.Schema({
	weddingName: {type: String, required: true, unique: true},
	partnerFirstNameA: {type: String, required: true},
	partnerLastNameA: {type: String, required: true},
	partnerFirstNameB: {type: String, required: true},
	partnerLastNameB: {type: String, required: true},
	startDate: {type: Date}, 
	endDate: {type: Date}, 
	addressLine1: {type: String, required: true},
	addressLine2: {type: String},
	addressLine3: {type: String},
	storyPic: {type: String},
    whenWherePic: {type: String},
    registryPic: {type: String},
    rsvpPic: {type: String}
});

const Wedding = mongoose.model("Wedding", weddingSchema);

module.exports = Wedding;