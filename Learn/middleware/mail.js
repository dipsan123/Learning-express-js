// firstly to work in the mail we should install nodemailer 

const nodemailer = require('nodemailer');

// create reusable transporter object

const transporter = nodemailer.createTransport({
    service:'gmai',  // service mean in  which medium is usde to transport mail 
    auth:{
        user:'dipsandhital@gmaill.com',
        pass:'your_password' // this is your gmail password
    }
})


// sending mail 
const sendMail= async()=>{
    const mail_information = {
    // We need to input the all email informatiom 
    from:'dipsandhital@gmail.com', 
    to:'dipsadhital001@gmail.com', 
    subject:'testing mail',
    text:'this is a test mail',
    html:`<h1>This is a test mail</h1>`  // for html format
    }; 


const send = await transporter.sendMail(mail_information);

console.log('mail sent', send);
}; 

module.exports = sendMail; 