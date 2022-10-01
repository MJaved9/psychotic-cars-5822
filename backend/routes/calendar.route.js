
const {Router}=require("express")
const moment=require("moment")
const { Events } = require("../models/event.model")


const eventRouter=Router()

eventRouter.get("/",async (req,res)=>{

const events= await Events.find({
    start:{$gte: moment(req.query.start).toDate()},
    end:{$lte: moment(req.query.end).toDate()}
})

res.send(events)

})

eventRouter.post("/create", async (req,res)=>{

    const event= new Events(req.body)
    console.log(event)

    await event.save()

    res.send({"msg":"event created"})
})


module.exports={eventRouter}
