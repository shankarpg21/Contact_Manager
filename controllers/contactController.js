const Contact=require('../models/contactModel');
const asyncHandler=require('express-async-handler');

const getContacts=asyncHandler(async(req,res)=>{
    const contacts=await Contact.find({user_id:req.user.id})
    res.status(200).json(contacts)
})

const getContact=asyncHandler(async(req,res)=>{
    const reqContact=await Contact.findOne({"name":req.params.name});
    if(!reqContact){
        res.status(400)
        throw new Error("Contact not found")
    }
    res.status(200).json(reqContact)
})

const createContact=asyncHandler(async(req,res)=>{
    const {name,email,Phone}=req.body
    if(!name||!email||!Phone)
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const newContact=await Contact.create({
        name,email,Phone,user_id:req.user.id
    })
    res.status(201).json(newContact);
})

const updateContact=asyncHandler(async(req,res)=>{
    const reqContact=await Contact.findOne({"name":req.params.name})
    if(!reqContact){
        res.status(400);
        throw new error("Contact not found");
    }
    const {name,email,Phone}=req.body;

    if(reqContact.user_id.toString()!=req.user_id){
        res.status(403);
        throw new Error("No permission");
    }
    await Contact.updateOne({"name":req.params.name},{$set:{"name":name,"email":email,"Phone":Phone}})
    const newContact=await Contact.findOne({"name":req.params.name})
    res.status(200).json(newContact)
})

const deleteContact=asyncHandler(async(req,res)=>{
    const reqContact=await Contact.findOne({"name":req.params.name})
    if(!reqContact){
        res.status(400); 
        throw new error("Contact not found");
    }
    if(reqContact.user_id.toString()!=req.user_id){
        res.status(403);
        throw new Error("No permission");
    }
    await Contact.findByIdAndRemove(req.params.name)
    res.status(200).json("Contact Deleted")
})

module.exports={getContact,getContacts,createContact,updateContact,deleteContact};
