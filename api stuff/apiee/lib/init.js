const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGOURI)
    .then(_ => console.log("connected to DB"));


const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        require: true
    }
})

const Person = mongoose.model("Person", PersonSchema);

export default Person;