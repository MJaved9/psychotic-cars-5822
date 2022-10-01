const mongoose=require("mongoose")


const eventSchema=new mongoose.Schema({
    start:Date,
    end:Date,
    title:String
})

const Events=mongoose.model("event",eventSchema)

module.exports={Events}