var nodemailer = require('nodemailer');

var smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
      user: 'sender gmail address',
      pass: 'password'
  }
};
var transporter = nodemailer.createTransport(smtpConfig);
var mailOptions = {
  from: 'sender gmail address ',
  to: 'recipient address',
  subject: 'Sending Email using Node.js',
  text: 'Success!!!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
