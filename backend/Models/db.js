const mongoose = require('mongoose');
const DB_URL=process.env.DB_URL
mongoose.connect(DB_URL).then(()=>{
    console.log('MongoDb Connected')
}).catch((error)=>{
    console.log(`Error:${error}`)
})