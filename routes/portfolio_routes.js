let express= require('express');
const { Model } = require('mongoose');
let server = express();
let rout = express.Router();
let Model_query = require('../model/queries.js');

rout.get('/',async function(req, res){
    res.render('index');
});

rout.post('/queries', async function(req,res){
    const{name, email, phone, subject} = req.body;
    if(!name || !email || !phone || !subject){
        res.redirect('/');
        // window.alert('enter all fields');
        console.log("enter all fields")
    }
    try{
        let query = new Model_query({name, email, phone, subject});
        const query_submit = await query.save();
    if(query_submit){
        console.log("query submitted"+query_submit);
        res.redirect('/');
    }
    else{
        res.status(500).json({error: 'query not submitted'});
    }
    }
    catch(error){
        console.log(error);
    }
    
})

// rout.post('/queries', function(req,res){
//     const {name, email, phone, subject} = req.body;
//     console.log(req.body);
//     let query = new Model_query({name, email, phone, subject});
//     query.save().then((data)=>{
//         console.log(data);
//         res.redirect('/');

//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// })







server.use('/',rout);
module.exports = rout;