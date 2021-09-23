import Person from "./init";

// CRUD methods
export const getPeople = async () => {
    try {
        const people = await Person.find();
        return { success: true, people }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

export const addPerson = async (name, age) => {
    try {
        const person = new Person();
        person.name = name;
        person.age = age;
        return { success: true, person: await person.save() }
    } catch (error) {
        return { success: false, error: error.message }
    }
}