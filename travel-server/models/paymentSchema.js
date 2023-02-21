var mongoose = require ('mongoose'); 

var Schema = mongoose.Schema; 

paymentSchema = new Schema ({
    firstname: String,
    lastname: String,
    country:String,
    city: String,
    zipcode: String,
    email: String,
    phone: String,
    cardname: String,
    cardnumber: Number,
    monthYear: String,
    cvv: Number
});

module.exports = mongoose.model('payment', paymentSchema);