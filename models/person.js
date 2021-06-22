const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const personSchema = new Schema ({
    firstname: {
        type: String, 
        required: true
    },
    lastname: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },number:{
        type: String,
        required: true
    },city:{
        type: String,
        required: true
    }
}, {timestamps: true});

const Person = mongoose.model("Person", personSchema)
module.exports = Person;