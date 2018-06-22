var express = require('express'); // grants access to the entire express API

// create a new express app
var app = express();
const PORT = process.env.PORT || 3000;

// Tell express which folder you want to serve

app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});
app.use(express.static('public'));

// start the server
app.listen(PORT, function(){
  console.log('Express server is running on port' +  PORT);
});
