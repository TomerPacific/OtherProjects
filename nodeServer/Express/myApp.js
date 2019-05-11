
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


// --> 7)  Mount the Logger middleware here

app.use(bodyParser.urlencoded({extended: false}));

app.post('/name', function(request, response) {
  response.json({"name": request.body.first + " " + request.body.last});
});

app.get('/name', function(request, response) {
  
  response.json({"name": request.query.first + " " + request.query.last});
});



app.get("/:word/echo", function(request, response) {
    response.json({"echo": request.params.word});
});

app.use(function(request, response, next) {
  console.log(request.method + " " + request.path + " - " + request.ip);
  next();
});

 app.get('/now', function(request, response, next) {
     
     next();  
 }, function(request, response) {
    request.time = new Date().toString();
     response.send({time: request.time});
 });


app.get("/", function(request, response) {
  let path = __dirname + '/views/index.html';
  response.sendFile(path);
});

app.use(express.static(__dirname + '/public'));

app.get("/json", function(request, response) {
  if(process.env.MESSAGE_STYLE === "uppercase") {
    response.json({"message": "HELLO JSON"});
  } else {
    response.json({"message": "Hello json"});
  }
});

// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
