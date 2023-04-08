const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');


const sendEmail = asyncHandler(async(data ,req , res) =>{
    let transporter = nodemailer.createTransport({
        sendEmail: true,
        host:"smtp.gmail.com",
        port : 587,
        secure : false,
        auth:{
            user : process.env.MAIL_ID,
            pass : process.env.PASS, //mail password
        },
    });
    // sending mail with the defined transport object
    let info = await transporter.sendMail({
        from : '"Hey" <abc@gmail.com>',  //sender address
        to: data.to, //reciver address
        subject : data.subject, 
        text:data.text,
        html: data.htm, //html body
    });
    console.log("Message sent to: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

module.exports = sendEmail;

