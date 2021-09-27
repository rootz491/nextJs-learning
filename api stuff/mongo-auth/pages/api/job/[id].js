import Job from '../../../models/job';
import isAuthenticated from '../../../middlewares/isAuthenticated';

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

        case 'POST':
            try {
                console.log(body);
            } catch (error) {
                
            }
            break;

        default:
            res.status(405).send();
    }

}


export default isAuthenticated(handler);