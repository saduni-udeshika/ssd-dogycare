const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppoinmentSchema = new Schema({
    
    name : {
        type : String,
        required: true

    },

    contact : {
        type: String,
    },
    nic : {
        type: String,
    },

    dogid : {
        type: String,
    },
    
    fee : {
        type: String,
    },
    date : {
        type: String,
    },
    time : {
        type: String,
    },
    reason : {
        type: String,
    }
    
})

const Appoinment = mongoose.model("Appoinment",AppoinmentSchema);

module.exports = Appoinment;

