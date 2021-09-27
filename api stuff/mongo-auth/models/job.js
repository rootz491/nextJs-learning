import mongoose from "mongoose";

var jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    employer: { 
        type: mongoose.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    employees: [{ 
        type: mongoose.Types.ObjectId,
        ref: "User" 
    }],
    date: {
        type: Date,
        default: new Date().getUTCDate()
    }
})

mongoose.models = {};

var Job = mongoose.model("Job", jobSchema);

export default Job;