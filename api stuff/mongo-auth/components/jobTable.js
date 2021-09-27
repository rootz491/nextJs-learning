import Link from "next/link";

export default function JobTable({ jobs }) {
    return (
        <>
            <div className="table">
                <div className="head">
                    <div className="row">
                        <p className="title"><strong>Job</strong></p>
                        <p className="description"><strong>Description</strong></p>
                        <p><strong>Employer</strong></p>
                        <p><strong>Current Employees</strong></p>
                    </div>
                </div>
                <div className="body">
                    { jobs.map((job, i) => (
                        <Link key={i} href={`/job/${job.id}`}><a>
                        <div className="row job">
                            <p className="title">{job.title}</p>
                            <p className="description">{job.description}</p>
                            <p>{job.employer}</p>
                            <p className="ce">{job.currentEmployees}</p>
                        </div></a>
                        </Link>
                    )) }
                </div>
            </div>

            <style jsx>{`
                .table {
                    widht: 1000px;
                    border-bottom: 1px solid black;
                }
                .row {
                    border-top: 1px solid black;
                    border-left: 1px solid black;
                    border-right: 1px solid black;
                    display: grid;
                    grid-template-columns: 300px 400px 150px 150px;
                    text-align: center;
                    padding: 1em .4em; 
                }
                .title, .description {
                    text-align: left;
                } 
                .job:hover {
                    color: white;
                    background: #444;
                    transition: all .4s ease;
                }
            `}</style>
        </>
    )
}
