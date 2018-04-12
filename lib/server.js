const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const Guest = require("./models/guest");
const Wedding = require("./models/wedding");
const User = require("./models/user");
const { verifyToken } = require('./middleware/auth')
const tokenService = require("./tokenService");
const config = require("config");
const path = require("path");

const router = require('./routes');

const uri = 'mongodb://localhost:27017/lellis';

const app = express();

const PORT = process.env.PORT || config.PORT;
const MONGODB_URI = process.env.MONGODB_URI || config.MONGODB_URI;

mongoose.connect(MONGODB_URI);

app.use('/', express.static(
	path.join(__dirname, '../build')
))

app.use(bodyParser.json());
app.use(router);

app.get('/guests/:weddingId', (req, res) => {
	//db.guests.find({"wedding._id": "5ab8149fb885752250cd531d"})
//1. find all the guests
	const weddingId = req.params.weddingId;
	Guest.find({"wedding": weddingId})
		.then(docs => {
			res.status(200).json({
				message: 'success', 
				payload: docs
			});
		})
		.catch(err => {
			res.status(500).json({
				message: err.message
			})
		})
//2. if found, send back success message with all guests
//3. if not found, send back error messsage
});

app.get('/weddings', (req, res) => {
//1. find all the guests
	Wedding.find()
		.then(docs => {
			res.status(200).json({
				message: 'success', 
				payload: docs
			});
		})
		.catch(err => {
			res.status(500).json({
				message: err.message
			})
		})
//2. if found, send back success message with all guests
//3. if not found, send back error messsage
});

app.get('/weddings/:wedding', (req, res) => {
//1. find all the guests
	const wedding = req.params.wedding;
	Wedding.findOne({weddingName: wedding})
		.then(docs => {
			res.status(200).json({
				message: 'success', 
				payload: docs
			});
		})
		.catch(err => {
			res.status(500).json({
				message: err.message
			})
		})
//2. if found, send back success message with all guests
//3. if not found, send back error messsage
});

app.post('/guests', (req, res) => {
	//1. grab the title and description from the guest request
	const { firstName, lastName, email, rsvp, plusOne, message, wedding } = req.body;
	const guest = new Guest({ 
		firstName: firstName, 
		lastName: lastName,
		email: email,
		rsvp: rsvp,
		plusOne: plusOne,
		message: message,
		wedding: wedding
	})

	guest 
		.save()
		.then(doc => {
			res.status(201).json({
				message: 'success',
				payload: doc
			})
		})
		.catch(err => {
			res.status(500).json({
				message: err.message
			})
		})
})


app.post('/weddings', verifyToken, (req, res) => {
	const { weddingName, partnerFirstNameA, partnerLastNameA, partnerFirstNameB, partnerLastNameB, startDate, endDate, addressLine1, addressLine2, addressLine3, storyPic, whenWherePic, registryPic, rsvpPic } = req.body;
	//Need to then save the userID to the wedding name
	//Then on PUT you need to check the username against the wedding that's trying to be editted. 
	console.log(req.token.user.id);
	const wedding = new Wedding({ 
		weddingName: weddingName,
		partnerFirstNameA: partnerFirstNameA,
		partnerLastNameA: partnerLastNameA,
		partnerFirstNameB: partnerFirstNameB,
		partnerLastNameB: partnerLastNameB,
		startDate: startDate, 
		endDate: endDate, 
		addressLine1: addressLine1,
		addressLine2: addressLine2,
		addressLine3: addressLine3,
		storyPic: storyPic, 
		whenWherePic: whenWherePic, 
		registryPic: registryPic, 
		rsvpPic: rsvpPic,
		weddingAdminId: req.token.user.id
	})

	wedding 
		.save() //send error because of duplicate error.. could have separate post request
		.then(doc => {
			res.status(201).json({
				message: 'success',
				payload: doc
			})
		})
		.catch(err => {
			res.status(500).json({
				message: err.message
			})
		})
})

app.put('/weddings/:weddingId', verifyToken, (req, res) => {
	//1. grab the title and description from the guest request
	const weddingId = req.params.weddingId;
	const { weddingName, partnerFirstNameA, partnerLastNameA, partnerFirstNameB, partnerLastNameB, startDate, endDate, addressLine1, addressLine2, addressLine3, storyPic, whenWherePic, registryPic, rsvpPic } = req.body;
//seems to return the found document before it was updated
	Wedding.findById(weddingId)
		.then(doc => {
			console.log("here's your doc");
			console.log(doc);
			doc.set({
				weddingName: weddingName,
				partnerFirstNameA: partnerFirstNameA,
				partnerLastNameA: partnerLastNameA,
				partnerFirstNameB: partnerFirstNameB,
				partnerLastNameB: partnerLastNameB,
				startDate: startDate, 
				endDate: endDate, 
				addressLine1: addressLine1,
				addressLine2: addressLine2,
				addressLine3: addressLine3,
				storyPic: storyPic, 
				whenWherePic: whenWherePic, 
				registryPic: registryPic, 
				rsvpPic: rsvpPic
			});
			if(req.token.user.id == doc.weddingAdminId){
				doc.save()
				.then(doc => {
					res.status(201).json({
						message: 'success',
						payload: doc
					})
				})
				.catch(err => {
					res.status(500).json({
						message: err.message
					})
				})
			} else {
		      res.status(400).json({ message: 'unauthorized' })
		    }
		})
		.catch(err => {
			res.status(500).json({
				message: err.message
			})
		})
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
