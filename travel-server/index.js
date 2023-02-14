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

//importing Blog Form Schema
var blogform = require('./models/blogformSchema');
var User = require('./models/userSchema');

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

<<<<<<< HEAD
=======

//route to post the feedback form data
app.post("/home", async(req, res) => {
	console.log(req.body)
	const feedbackdata = req.body;
	await feedback.create(feedbackdata);
	await res.send("true");
}); 

>>>>>>> df398aceff2fe50807bfa15ae04bc4fbdfef2df3
app.post("/BlogForm", async(req,res)=>{
	const blogData = req.body;
	console.log(blogData);
	await blogform.create(blogData);
	await res.send("true");
})

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
		res.status(400).send("All input is required");

	  }
  

	  const oldUser = await User.findOne({ email });
  
	  if (oldUser) {
		return res.status(409).send("User Already Exist. Please Login");
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
		res.status(400).send("All input is required");
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
		res.redirect('/home');
	  }
	  res.status(400).send("Invalid Credentials");
	} catch (err) {
	  console.log(err);
	}
  });

// starting the port
app.listen(port);
console.log("App Listening to Port : "+port)