const mongoose=require("mongoose")
const datasschema=mongoose.Schema(

    {
        "title":String,
        "content":String,
        "tags":String,
       
        
        
    }
)
let datasmodel=mongoose.model("data",datasschema)
module.exports={datasmodel}