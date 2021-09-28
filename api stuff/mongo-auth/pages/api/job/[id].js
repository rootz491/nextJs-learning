import Job from '../../../models/job';
import isAuthenticated from '../../../middlewares/isAuthenticated';
import connectDB from '../../../middlewares/db';

async function handler(req, res) {
    const {
        method,
        query,
        body
    } = req

    switch(method) {

        case 'GET':
            try {
                const job = await Job.findById(query.id).populate('employer').populate('employees').exec()
                res.json({success: true, job});
            } catch (error) {
                res.json({success: false, error: error.message})
            }
            break;

        case 'PUT':
            try {
                console.log(body);
            } catch (error) {
                
            }
            break;
        
        case "DELETE":
            try {
                // check if user is `employee` or not
                if (user.type === 'employee') throw {message: "Employee cannot delete job"}
                // verify fields
                if (!(query.id)) throw {message: "job id are required"}
                // delete from DB
                let job = await Job.findById(query.id).populate('employer');
                // check if job exists or not
                if (job) {
                    //  check if job's 'employer' is same as 'current user' or current user is 'admin' 
                    if (job.employer.id === req.user._id || req.user.type === 'admin') {
                        
                        await job.remove();
                        return res.json({success: true});
                    }
                    else throw {message: "job doesn't belong to you"}
                }
                else throw {message: "job doesn't exist"}
            } catch (error) {
                return res.status(403).json({success: false, message: error.message});
            }

        default:
            res.status(405).send();
    }

}


export default isAuthenticated(connectDB(handler));