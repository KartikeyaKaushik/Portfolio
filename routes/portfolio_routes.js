let express= require('express');
let server = express();
let rout = express.Router();

rout.get('/',async function(req, res){
    res.render('index');
})







server.use('/',rout);
module.exports = rout;