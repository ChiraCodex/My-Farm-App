import express from 'express'
import joi from 'joi'
import router from './userRoutes.js'
import {Client} from '../models/user.js'


router.post("/",async(req,res)=>{
  try {
    const {error} = validate(req.body);
    if (error)
      return res.status(400).send({message:error.details[0].message })
    const user = await Client.findOne({email:req.body.email })
    if(!user)
      return res.status(401).send({message: "Invalid Email or Password"});

    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if (!validPassword)
      return res.status(401).send({message: "Invalid Email or Password"})
    const token = user.generateAuthToken();
    res.status(200).send({data:token, message: "Logged in Successfully"})


  } catch (error) {
    res.status(500).send({message: "Internal Server Error"})
  }
})

const validate = (data) => {
  const schema =joi.object({
    email: joi.string().email.required().label("Email"),
    password: joi.string().required().label("Password")
  })
}

export default router