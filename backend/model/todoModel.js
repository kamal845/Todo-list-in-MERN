const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
toDo:{
    type:String,
    required:true
}
})
module.exports=mongoose.model('toDo',todoSchema);