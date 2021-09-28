import Job from "../../../models/job";
import isAuthenticated from "../../../middlewares/isAuthenticated";
import connectDB from "../../../middlewares/db";

async function handler(req, res) {
    const {
        body,
        method,
        user
    } = req;

    switch(method) {

        case "GET":
            const result = await Job.find().populate('employer').exec();
            var jobs = [];
            result.forEach(job => {
                jobs.push({ id: job._id, title: job.title, description: job.description, employer: job.employer.username, currentEmployees: job.employees.length });
            });
            return res.json({ success: true, jobs });

        case "POST":
            try {
                // check if user is `employee` or not
                if (user.type === 'employee') throw {message: "Employee cannot post job"}
                // verify fields
                if (!(body.title && body.description)) throw {message: "All fields are required"}
                // add to DB
                const newJob = new Job({ title: body.title, description: body.description, employer: req.user._id });
                return res.json({success: true, job: await newJob.save()});
            } catch (error) {
                return res.status(403).json({success: false, message: error.message});
            }
        
        default:
            return res.status(405).send();
    }
}

export default isAuthenticated(connectDB(handler));
