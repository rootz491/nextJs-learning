import { useBearer } from "./hooks";

export async function fetchJobs() {
    const res = await fetch('/api/job', {
        method: 'GET',
        headers: {
            "authorization": await useBearer()
        }
    })
    const data = await res.json();
    return data.jobs;       // return array containing jobs
}

export async function fetchJobById(id) {
    const res = await fetch(`/api/job/${id}`, {
        method: 'GET',
        headers: {
            "authorization": await useBearer()
        }
    })
    const data = await res.json();
    return data.job;
}