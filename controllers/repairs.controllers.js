const {Repair} =require('../models/repair.model');

exports.getAllRepairs=async(req,res)=>{
    try {
        const repairs= await Repair.findAll({where:{status:'pending'}});
        res.status(200).json({
            repairs
        });
        
    } catch (err) {
        console.log(err);
    }
};
exports.getRepairById= async(req,res)=>{
    try {
    const {id} = req.params;
    const repair = await Repair.findOne({where:{id,status:'pending'}});
    if(!repair){
        return res.status(404).json({
            ststus:'error',
            message:'no repair found'
        });
    }
    res.status(200).json({
        repair
    })
    } catch (err) {
        console.log(err)
    }
};
exports.createNewRepair=async(req,res)=>{
    try {
        const {date,userId} = req.body;
        const newRepair = await Repair.create({userId,date});
        res.status(201).json({
            newRepair
        });
    } catch (err) {
        console.log(err)
    }
};
exports.repairCompleated=async(req,res)=>{
    try {
        const {id} = req.params;
        const repair = await Repair.findOne({where:{id,status:'pending'}});
        if(!repair){
            return res.status(404).json({
                ststus:'error',
                message:'no repair found'
            });
        }
        await repair.update({status:'compleated'});
        res.status(200).json({ststus:'success'})
    } catch (err) {
        console.log(err)
    }
};
exports.cancelRepair=async(req,res)=>{
    try {
        const {id} = req.params;
        const repair = await Repair.findOne({where:{id,status:'pending'}});
        if(!repair){
            return res.status(404).json({
                ststus:'error',
                message:'no repair found'
            });
        }
        await repair.update({status:'canceled'});
        res.status(200).json({status:'success'})
    } catch (err) {
        console.log(err)
    }
};
