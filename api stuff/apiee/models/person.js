import mongoose from "mongoose";

var PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        require: true
    },
    joined: {
    	type: Date,
    	default: Date.now
    }
});

mongoose.models = {};

var Person = mongoose.model("Person", PersonSchema);

export default Person;