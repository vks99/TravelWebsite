// Importing all required modules
var express  = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
const cors = require('cors');

// Setting cors and mongoose warning
app.use(cors());
mongoose.set('strictQuery', false);

// importing required schemas
var contactus = require('./models/contactusSchema');
var feedback = require('./models/feedbackSchema');

// assigning port no
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// Connection to MongoDB Database
mongoose.connect("mongodb+srv://vikasguptha99:Vik240398@cluster0.0rsfijt.mongodb.net/TravelCationTest", { useNewUrlParser: true });

// routes
app.post("/contactus",async(req, res)=>{
	const formData = req.body;
	console.log(formData);
	await contactus.create(formData);
	await res.send("true");
});

//route to post the feedback form data
app.post("/home", async(req, res) => {
	console.log(req.body)
	const feedbackdata = req.body;
	await feedback.create(feedbackdata);
	await res.send("true");
}); 

// starting the port
app.listen(port);
console.log("App Listening to Port : "+port)