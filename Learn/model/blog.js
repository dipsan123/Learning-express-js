
// Creating the schema object 

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:String, 
    // address:String, 
    // phone:String,
    email:String
}); 

module.exports= mongoose.model('blog', schema); 

