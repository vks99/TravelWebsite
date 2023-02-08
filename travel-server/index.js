// Importing all required modules
const url = require('url');
var express  = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
const exphbs = require('express-handlebars');

var travelSchema = require('./models/schema');
var database = require('./config/database');

// assigning port no
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(express.static(path.join(__dirname, 'public')));

// Intializing template engine
app.engine('.hbs', exphbs.engine({ 
	extname: '.hbs',runtimeOptions:{
		allowProtoPropertiesByDefault:true,
		allowProtoMethodsByDefault:true
	}
}));
app.set('view engine', 'hbs');

// starting the port
mongoose.connect(database.url, { useNewUrlParser: true });

app.listen(process.env.PORT);
console.log("App Listening to Port : "+process.env.PORT)