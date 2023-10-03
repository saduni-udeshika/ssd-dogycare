const Suser = require("../models/Suser");

const mongoose = require("mongoose");

//fetch suser profile
exports.getSuserProfile = async (req,res) =>{
    try{
        if(!req.user) {
            res.status(422).json({
                success:false,
                desc:"Can not find the user - please check again",

            });
        }else {
            res.status(200).send({
                suser:req.user,
            });
        }
    }catch(error) {
        res.status(500).json({
            success:false,
            desc:"Error in getSuserProfile controller - "+error,
        });
    }
};

//update cutomer profile
exports.updateSuserProfile = async (req,res) => {
    const {name,email,contactNumber,password} = req.body;

    try{
        const newData = {
            name,
            email,
            contactNumber,
            password
        };

        const updatedsuser = await Suser.findByIdAndUpdate(
            req.user.id,
            newData,
            {
                new:true,
                upsert:false,
                omitUndefined:true
            }
        );
        res.status(200).send({
            success:true,
            desc: "suser update successfully",
            updatedsuser,
        });
    }catch(error){
        res.status(500).json({
            success:false,
            desc:"Error in updating suser profile controller " +error,
        });
    }
};

//delete suser profile
exports.deleteSuserProfile = async(req,res) =>{

    if (!mongoose.Types.ObjectId.isValid(req.user._id))
        return res.status(404).send(`No suser with id: ${req.user._id}`);

    try {
        await Suser.findByIdAndRemove(req.user._id);
        const deletedSuser = await DeletedSuserModel.create({
            suserID:req.user._id
        });
       
        res.status(200).send({
            success: true,
            desc: "Suser deleted successfully",
            deletedSuser,

        });
    } catch (error) {
        res.status(500).json({
            success: false,
            desc: "Error in delete Suser Profile controller-" + error,
        });
    }


};


exports.allProfiles =  (req,res) =>{
    
    Suser.find().then((Susers) => {
        res.json(Susers)

    }).catch((err) => {
      
    })
    
};