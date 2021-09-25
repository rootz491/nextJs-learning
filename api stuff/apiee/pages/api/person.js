import connectDB from "../../middleware/init";
import Person from "../../models/person";
import {getPeople} from "../../middleware/crud";

const handler =  async (req, res) => {
    //  get params from req
    const {
        body,
        method
    } = req;

    //  check req type and handle them
    switch(method) {
        
        case "GET":
            const data = await getPeople();
            res.json({...data});
            break;

        case "POST":
            // verify user input
            if (body.name.length < 5) res.status(400).json({message: "name must have at-least 5 characters"});
            if (body.age < 5 || body.age > 120) res.status(400).json({message: "age must be between 5 and 120"});
            // create new Person instance using user provided data
            const person = new Person({
                name: body.name, 
                age: body.age
            });
            //  save Person instance in DB
            const newPerson = await person.save().catch(err => res.status(500).json({message: err.message}));
            // return new person
            res.status(201).json({person: newPerson});
            break;
        
        default:
            res.status(405);
    }
}

// before handling req, first connect to DB
export default connectDB(handler);