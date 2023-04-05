let express = require('express');
let server = express();
let rout = express.Router();
let path = require('path');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
require('./db/database_connection.js');
mongoose.set('strictQuery', false);
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');









server.use(express.static('public'));
server.use(express.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use('/',rout);
server.use('/',require('./routes/portfolio_routes.js'));
const PORT = process.env.PORT;
server.listen(PORT, ()=>console.log(`server running at ${PORT}`));