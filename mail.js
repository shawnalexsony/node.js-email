var nodemailer = require('nodemailer');

var smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
      user: 'shawnal.bot@gmail.com',
      pass: '1.2.3.a.s.d'
  }
};
var transporter = nodemailer.createTransport(smtpConfig);
var mailOptions = {
  from: 'shawnal.bot@gmx.com',
  to: 'shawnalex97@gmail.com',
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
