
// imorting the mongoose 
const mongoose  = require('mongoose');
const connect = async()=>{
    await mongoose.connect(process.env.URL); 
    console.log('Connected to MongoDB');
}

module.exports= connect;