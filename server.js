global.db = require('./libs/db/db.js')();

var express           = require("express");
    methodOverride    = require("method-override");
    compress          = require("compression");
    bodyParser        = require("body-parser");
    // cookieParser      = require("cookie-parser");
    logger            = require("morgan");
    mongoose          = require("mongoose");

    // _              = require('lodash')


var app = express();


var router = require('./controllers/router.js');
app.enabled('trust proxy');

//  Use all the following middlewares before calling the home page.
app.use(logger('dev'));
app.use(compress());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());
// app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views','views');

var port = process.env.PORT || 37232;
var ip = process.env.IP || '0.0.0.0';
app.listen(port,ip);


 

// This allows you use the route funtions in the controller by exporting express to the route files using app.
router.route(app);
console.log("server started at " + ip + " and the port is " + port);




