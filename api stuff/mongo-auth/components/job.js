
export default function Job({ job }) {
    return (
        <>
            <h1>{job.title}</h1>
            {/* render date [later] */}
            <p>{job.description}</p>
            <div className="ee">
                <div>
                    <h2>Employer</h2>
                    <div className="field"><h4>Name</h4> <p>{job.employer.username}</p></div>
                    <div className="field"><h4>Email</h4> <p>{job.employer.email}</p></div>
                </div>
                <div>
                    <h2>List of Employee's who've joined</h2>
                    <ol>
                    { 
                        job.employees.length > 0 ? 
                        job.employees.map((e, i) => 
                            <li key={i}><div className="field"><p>{e.username}</p></div></li>
                        ) : 
                        <h3>No employees joined yet</h3> 
                    }
                    </ol>
                </div>
            </div>

            <style jsx>{`
                h2 {
                    margin-bottom: 1em;
                    text-decoration: underline;
                }
                h3 {
                    color: grey;
                    text-align: center;
                }
                .field {
                    margin: .5em 0;
                    display: flex;
                    min-width: 250px;
                    text-align: left;
                    justify-content: space-between;
                    align-items: center;
                }
                .ee {
                    display: grid;
                }
                .ee > div {
                    margin: 2em .5em;
                    padding: 1em;
                }
                li {
                    padding: 0 1em;
                }
            `}</style>
        </>
    )
}
