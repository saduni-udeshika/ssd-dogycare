const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({

      dogID: {
            type: String,
      },
      dogName: {
            type: String,
      },
      ownerName: {
        type: String,
      },
      address: {
        type: String,
      },
      dob: {
        type: String,
      },
      breed: {
        type: String,
      },
      sex: {
        type: String,
      },
      image: {
        type: String,
      },
      weight: {
        type: String,
      },
      bloodGroup: {
        type: String,
      },
      disease: {
        type: String,
      },
      lastDate: {
        type: String,
      },
      nextDate: {
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
})

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;