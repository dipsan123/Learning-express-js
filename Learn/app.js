
require('dotenv').config(); 
// Imporing express 
const express= require('express'); 
const app= express(); 
app.use (express.json()); 

//connecting to the database 
const db = require('./database/connect'); 
db();

// Importing schema files 
const model= require('./model/blog'); 


// importing the mail file 
const mail = require('./middleware/mail'); 


// creating the server 

app.get ('/', (req, res)=>{
    res.send('Hello World!');

})



// Posting the data from the body to backend server (mongodb)
app.post('/user', async(req,res)=>{
    const {name, address, phone, email} = req.body; 
     console.log(name, address, phone, email);
    res.json ({
        message: "Data received successfully",
        
    })

    await model.create({
        name:name,
        email: email,
    })
});


// !Api for forget passowrd ( Working on the mail)
app.get('/forget', (req,res)=>{
 mail(); 
 res.json({
    message: "Forget Password API Error",
 })
}); 


// To find out the data into the databse 
app.get('/find', async(req,res)=> {
    res.json({
        message: "Data fetched successfully",
        data:await model.find(),  // .find() help to find the data 
    }); 
})

// To read the data from the database with the help of the ID 

app.get('/find/:id', async(req,res)=>{
 const id = req.params.id;
 const blogid= await model.findById(id);
 res.json({
    message: "Data found successfully",
    data:await model.findById(blogid), // .findById() help to find the data
 })
})





app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`); 
 });

