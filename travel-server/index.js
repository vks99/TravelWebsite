// Importing all required modules
require("dotenv").config();
var cookieParser = require('cookie-parser');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var express  = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
const cors = require('cors');

// Setting cors and mongoose warning
app.use(cors());
app.use(cookieParser()); 
mongoose.set('strictQuery', false);

// importing required schemas
var contactus = require('./models/contactusSchema');
var feedback = require('./models/feedbackSchema');
const auth = require("./middleware/auth");

//importing Blog Form Schema
var blogform = require('./models/blogformSchema');
var User = require('./models/userScheme');

var User = require('./models/userScheme');
const multer = require("multer");

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

app.post("/blogForm", async(req,res)=>{
	const blogData = req.body;
	console.log(blogData);
	await blogform.create(blogData);
	await res.send("true");
})

app.get("/blogs", async(req,res)=>{
	try {
		const posts = await blogform.find();
		console.log(posts);
		res.json(posts);
		
	  } catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Server Error' });
	  }
})


app.get("/test",auth, (req,res)=>{
    console.log(req.cookies);
	res.send(`<p>hello</p>`);
	});

app.post("/register", async (req, res) => {
	try {
	  // Get user input
	  let name = req.body.name;
	  let email = req.body.email;
	  let password = req.body.password;
	  let address = req.body.address;
	  let phone = req.body.phone;
	  let username = req.body.username;

  
	  // Validate user input
	  if (!(email && password && name )) {
		console.log(email);
		console.log(req.body.email);
		console.log("All input is required");
		//res.status(400).send("All input is required");

	  }
  

	  const oldUser = await User.findOne({ email });
  
	  if (oldUser) {
		console.log("User Already Exist. Please Login");
		//return res.status(409).send("User Already Exist. Please Login");
	  }
  
	  //Encrypt user password
	  encryptedPassword = await bcrypt.hash(password, 10);
  
	  // Create user in our database
	  const user = await User.create({
		name,
		address,
		phone,
		username,
		email: email.toLowerCase(), // sanitize: convert email to lowercase
		password: encryptedPassword,
	  });
  
	  // Create token
	  const token = jwt.sign(
		{ user_id: user._id, email },
		process.env.TOKEN_KEY,
		{
		  expiresIn: "2h",
		}
	  );
	  // save user token
	  res.cookie('auth',token);
	  console.log("registersuccess");
	  await res.send("true");
	} catch (err) {
	  console.log(err);
	}
  });
  
app.post("/login", async (req, res) => {
	try {
	  // Get user input
	  let email = req.body.email;
	  let password = req.body.password;
	  // Validate user input
	  if (!(email && password)) {
		console.log("All input is required");
		//res.status(400).send("All input is required");
	  }
	  // Validate if user exist in our database
	  const user = await User.findOne({ email });
  
	  if (user && (await bcrypt.compare(password, user.password))) {
		// Create token
		const token = jwt.sign(
		  { user_id: user._id, email },
		  process.env.TOKEN_KEY,
		  {
			expiresIn: "2h",
		  }
		);
  
		// save user token
		res.cookie('auth',token);
		//res.redirect('/home');
		console.log("loginsuccess");
		await res.send("true");
	  }
	  console.log("Invalid Credentials");
	  //res.status(400).send("Invalid Credentials");
	} catch (err) {
	  console.log(err);
	}
  });

// starting the port
app.listen(port);
console.log("App Listening to Port : "+port)