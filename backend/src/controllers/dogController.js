const dogsDetails = require("../models/Dogs");

//add new dog for system
exports.addNewDog= async (req, res) => {
 
    //constant variables for the attributes
    const {dogID,dogName, ownerName,address,dob,breed,sex,image,weight,bloodGroup,disease,lastDate,nextDate,medicine,labTests,doctor} = req.body;
  
  
    dogsDetails.findOne({dogID: dogID})
      .then((savedDog) => {
          if(savedDog) {
              return res.status(422).json({error:"Dog already exists with that no"})
          }
  
          const newDog = new dogsDetails({
            dogID,
            dogName,
            ownerName,
            address,
            dob,
            breed,
            sex,
            image,
            weight,
            bloodGroup,
            disease,
            lastDate,
            nextDate,
            medicine,
            labTests,
            doctor
           
        })
    
        newDog.save().then(() => {
             res.json("Dog Added")
    
        }).catch((err) => {
          
        })
      
    }).catch((err) =>{
        
    })
    }

//delete existing one
exports.deleteDog = async (req, res) => {
    let dogid = req.params.id;
   
    await dogsDetails.findByIdAndDelete(dogid).then(() => {
      res.status(200).json({ status: "Deleted Successfully" });
    }).catch((error) => {
      res.status(500).json({ status: "Error with Deleting", error: error.message });
    })
  }
   
 //update 
 exports.updateDog= async (req, res) => { 
    //fetch id from url
    let id = req.params.id;
    const {dogID,dogName, ownerName,address,dob,breed,sex,weight,bloodGroup,disease,lastDate,nextDate,medicine,labTests,doctor} = req.body;
  
    const updateDog = {
        dogID,dogName,ownerName,address,dob,breed,sex,weight,bloodGroup,disease,lastDate,nextDate,medicine,labTests,doctor
    }
  
  
    const update = await dogsDetails.findByIdAndUpdate(id, updateDog).then(() => {
      res.status(200).send({status: "Result updated"})
    }).catch((err) => {
       
        res.status(500).send({status: "Error with updating data", error: err.message});
    })   
  }

//view 
exports.viewDogs= async (req, res) => { 
 
    //calling  model
    dogsDetails.find().then((dogs) => {
      res.json(dogs)
  
  }).catch((err) => {
     
  })
  
  }
  //view one
  exports.viewOneDog = async (req, res) => {
    
    let did = req.params.id;
    const dog = await dogsDetails.findById(did).then((dog) => {
        res.status(200).send({status: "  fetched", did})
    }).catch(() => {
        
         res.status(500).send({status:"Error with get " , error: err.message})
    })
  }