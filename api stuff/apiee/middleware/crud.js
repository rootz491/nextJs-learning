import Person from "../models/person";

// CRUD methods
export const getPeople = async () => {
    try {
        const people = await Person.find();
        return { success: true, people }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

export const findPersonByName = async name => {
    try {
        const person = await Person.find({name}).exec();
        if (person)
            return { success: true, person }
        else throw { message: "Person by this name does not exist." }
    } catch (error) {
        return { success: false, error: error.message }
    }
}