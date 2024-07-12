const express=require('express');
const mongoose=require('mongoose');
const routes=require('./routes/todoRoute');
require('dotenv').config();
const cors=require('cors');
const app=express();
const PORT=process.env.PORT || 4000
//middleware
app.use(express.json());
app.use(cors())
app.use('/api',routes);
app.get('/',(req,res)=>{
    res.send('hiii');
})

//database connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("database is connected"))
.catch((err)=>console.log(err));
app.listen(PORT,(req,res)=>{
console.log('port is started at 4000 in backend part');
})