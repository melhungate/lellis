const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: false},
	rsvp: {type: String, required: false},
	plusOne: {type: String, required: false},
	message: {type: String}
	//guest: { type: Schema.Types.ObjectId, ref: 'Guest' }
	//link to other guests in party and/or to their +1
});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
