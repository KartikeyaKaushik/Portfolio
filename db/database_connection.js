let mongoose = require('mongoose');
const DB = process.env.DATABASE;

// atlas connection
mongoose.connect(DB,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>console.log("connected to database"))
.catch((error)=>console.log(error));