const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rescuedDogSchema = new Schema({

  dogName: {
     type: String,
     unique: true,
     require: true
  },

  registerdDate:{
    type: Date,
    require: true
  },

  rescuerName: {
    type: String,
  },

  rescuerContactNo: {
    type: Number,
    require: true
   
  },

  dogImage: {
    type: String,
  },

  description:{
    type: String,
   
  },

  
  weight: {
    type: String,
  },

  
  dogColour:{
    type: String,
  },

  gender: {
    type: String,
  },

  age: {
    type: String,
  },

  bloodGroup: {
    type: String,
  },

  medicine: {
    type: String,
  },

  labTests: {
    type: String,
  },

  doctor: {
    type: String,
  },

  disabilities:{
    type: String,
  },
  
  disease: {
    type: String,
  },

  perspectivePetParents:{
    type: String,
    require: true
  },

  contactNo:{
    type: Number,
    require: true
  },

  buildingNo:{
    type: String,
    require: true
  },

   street:{
    type: String,
    require: true
   },

   city:{
    type: String,
    require: true
   },

   adoptDate:{
    type: Date,
    require: true
   },

   status:{
    type: String
   }
})



const RescuedDog= mongoose.model("RescuedDog", rescuedDogSchema);

module.exports = RescuedDog;