import { getPeople, addPerson } from "../../lib/mongo";

export default async function handler(req, res) {
    const {
        body: {
            name, age
        },
        method
    } = req;
    // console.log(req);

    switch(method) {
        case "GET":
            const data = await getPeople();
            res.json({...data});
            break;
        case "POST":
            console.log(name, age)
            const person = await addPerson(name, age);
            res.status(201).json(person);
            break;
        default:
            res.status(405)
    }
}