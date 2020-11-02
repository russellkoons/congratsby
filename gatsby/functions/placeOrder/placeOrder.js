const nodemailer = require('nodemailer');

// create a transport
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'derick.kutch@ethereal.email',
      pass: 'YhcCT69mnrDJHy2ZUA'
  }
});
