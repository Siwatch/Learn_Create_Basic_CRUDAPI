const express = require("express");
const router = express.Router();
const Users = require("../models/userSchema");


router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const data = new Users({
        name:req.body.name,
        activity:req.body.activity,
        hour:req.body.hour,
    });
    try{
        const dataToSave =  await data.save()
        res.status(200).json(dataToSave)
      }
      catch(error){
          res.status(500).json({message:error.message})
      }
})

router.get("/getdata", async(req,res) => {
    try{
        const userdata = await Users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    }catch(error){
        res.status(500).json(error);
    }
})

router.get('/getone/:id', async(req,res) => {
    try{
        const data = await Users.findById(req.params.id);
        res.json(data)
      }
      catch(error){
      res.status(500).json({message: error})
      }
})

router.put('/update/:id', async(req,res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Users.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.delete('/delete/:id',async (req,res) => {
    try {
        const id = req.params.id;
        const data = await Users.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router;