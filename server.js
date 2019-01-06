const secret = require('./secret')
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var AWS = require('aws-sdk');

// Set the region 
AWS.config.update({ region: 'us-west-2' });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.post('/api/form', (req, res) => {
  const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Name: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `

  var params = {
    Destination: {
      CcAddresses: [
        'sagenate24@gmail.com',
      ],
      ToAddresses: [
        'sagenate24@gmail.com',
      ]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlEmail
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Email from portfolio website'
      }
    },
    Source: 'portfolioemailmessage@gmail.com',
    ReplyToAddresses: [
      req.body.email,
    ],
  };

  // Create the promise and SES service object
  var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

  // Handle promise's fulfilled/rejected states
  sendPromise.then(
    function (data) {
      res.status(200).json('success');
    }).catch(
      function (err) {
        console.log(err)
        res.status(500).json('error');
      });
})

const port = process.env.PORT || 3000;

app.listen(port);

console.log('app is listening on ' + port);
