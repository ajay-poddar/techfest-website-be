var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var multiparty = require('connect-multiparty');

//Routes
var viewPages = require('./routes/viewPages');
var apis = require('./routes/apis');

var app = express();
var port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('port',port);

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(multiparty());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', viewPages);
app.use('/api',apis);

http.createServer(app).listen(app.get('port'),function(res,req){
    console.log("Server Listening on Port " + app.get('port'));
});

module.exports = app;