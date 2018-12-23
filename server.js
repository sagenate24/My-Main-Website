const secret = require('./secret')
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'))
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Name: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: secret.user,
        pass: secret.pass
      }
    })

    let mailOptions = {
      from: req.body.email,
      to: 'sagenate24@gmail.com',
      replyTo: req.body.email,
      subject: req.body.name,
      text: req.body.message,
      html: htmlEmail
    }

    console.log(req.body)

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }

      console.log('Message sent: %s', info.messageId)
    })
  })
})

const port = process.env.PORT || 3000;

app.listen(port);

console.log('app is listening on ' + port);
