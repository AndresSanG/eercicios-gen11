const {User} =require('../models/user.model.js');

exports.getAllUsers=async(req,res)=>{
    try {
        const users= await User.findAll();
        res.status(200).json({
            users
        });
        
    } catch (err) {
        console.log(err);
    }
};
exports.getUserById= async(req,res)=>{
    try {
    const {id} = req.params;
    const user = await User.findOne({where:{id}});
    if(!user){
        return res.status(404).json({
            ststus:'error',
            message:'no user found'
        });
    }
    res.status(200).json({
        user
    })
    } catch (err) {
        console.log(err)
    }
};
exports.createNewUser=async(req,res)=>{
    try {
        const {email,password,name,role} = req.body;
        const newUser = await User.create({name,email,password,role});
        res.status(201).json({
            newUser
        });
    } catch (err) {
        console.log(err)
    }
};
exports.updateUser=async(req,res)=>{
    try {
        const {name,email} = req.body;
        const {id} = req.params;
        const user = await User.findOne({where:{id}});
        if(!user){
            return res.status(404).json({
                ststus:'error',
                message:'no user found'
            });
        }
        await user.update({name,email});
        res.status(200).json({ststus:'success'})
    } catch (err) {
        console.log(err)
    }
};
exports.deleteUser=async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findOne({where:{id}});
        if(!user){
            return res.status(404).json({
                ststus:'error',
                message:'no user found'
            });
        }
        await user.update({status:'deleted'});
        res.status(200).json({ststus:'success'})
    } catch (err) {
        console.log(err)
    }
};