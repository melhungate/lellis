const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weddingSchema = new mongoose.Schema({
	groomFirstName: {type: String, required: true},
	groomLastName: {type: String, required: true},
	brideFirstName: {type: String, required: true},
	brideLastName: {type: String, required: true},
	startTime: {type: Date, required: true}, 
	endTime: {type: Date}, 
	addressLine1: {type: String, required: true},
	addressLine2: {type: String},
	addressLine3: {type: String}
});

const Wedding = mongoose.model("Wedding", weddingSchema);

module.exports = Wedding;