


// const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
// const authToken = 'your_auth_token';


// const twilio = require('twilio')
// const client = new twilio(accountSid, authToken)

// client.messages.create({
//   body: 'Hello from Node',
//   to: '+12345678901',
//   from: '+12345678901'
// })
// .then(message => console.log(message.sid))

//AUTHENTICATE CLIENT

// const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
// const authToken = 'your_auth_token';
// const client = require('twilio')(accountSid, authToken)

//CREATE A NEW RECORD

// const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
// const authToken = 'your_auth_token';
// const client = 

//RESPOND TO INCOMING MESSAGE

// const http = require('http');
// const express = require('express');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const app = express() //the creation of the web server/application 

// app.post('/sms', (req, resp) => {
//   const twiml = new MessagingResponse()

//   twiml.message('The Robots are coming! Head for the hills!' )

//   resp.writeHead(200, {'Content-Type': 'text/xml'});

//   resp.end(twiml.toString())
// });

// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on post 1337')
// });

//How do I test it? -- you can use mocha and chai to rest, stick with unit tests. If you want to test 
//set environment variables

const express = require('express');

const app = express();

app.listen(3000)

app.set('view engine', 'ejs')

app.get('/', (req, res) => { /*the first parameter you put in is going to be the path*/
  console.log('Here')
  // res.status(500).json({ message: 'We done goofed'})  //You can chain status to other things such as send, to send a message with your status code
  //If you don't care about the status, you can just do res.json({ message: This is how we do it }) and the implied status is 200
  // res.download('server.js') //Ok, this is really very cool.
  // res.send('Hi')   //res.send is used for testing purposes

  //You will either be sending down some json, or you will be rendering a file
  res.render('index', { textwewe: 'Hello World!'})
})                
console.log('H')

//EXAMPLE FOR HOW TO TEST THE APIs - SERVER THAT IS BEING TESTED
// let express = require('express');
// let app = express();
// let mongoose = require('mongoose');
// let morgan = require('morgan');
// let bodyParser = require('body-parser');
// let port = 8080;
// let book = require('./app/routes/book');
// let config = require('config'); //we load the db location from the JSON files
// //db options
// let options = { 
//                 server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
//                 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
//               }; 

// //db connection      
// mongoose.connect(config.DBHost, options);
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

// //don't show the log when it is test
// if(config.util.getEnv('NODE_ENV') !== 'test') {
//     //use morgan to log at command line
//     app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }

// //parse application/json and look for raw text                                        
// app.use(bodyParser.json());                                     
// app.use(bodyParser.urlencoded({extended: true}));               
// app.use(bodyParser.text());                                    
// app.use(bodyParser.json({ type: 'application/json'}));  

// app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));

// app.route("/book")
//     .get(book.getBooks)
//     .post(book.postBook);
// app.route("/book/:id")
//     .get(book.getBook)
//     .delete(book.deleteBook)
//     .put(book.updateBook);


// app.listen(port);
// console.log("Listening on port " + port);

// module.exports = app; // for testing