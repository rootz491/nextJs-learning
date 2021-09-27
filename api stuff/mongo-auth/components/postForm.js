import route from "next/router";
import { useState } from "react"

export default function LoginForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const jobPost = async e => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch("/api/job", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                title, description
            })
        });
        const data = await res.json();
        if (res.status === 201) {
            route.push('/work-place');
        }
        else {
            setError(data.error);
        }
        setLoading(false)
    }

    return (
        <form method="POST" onSubmit={jobPost}>
            <input placeholder="Title of the job" type="text" value={title} onChange={e => setTitle(e.target.value)} required />
            <textarea placeholder="Description of your job" value={description} onChange={e => setDescription(e.target.value)} required />
            <button disabled={loading} type="submit">post</button>
            <div className="error">{error}</div>

            <style jsx>{`
                form {
                    margin: 1em auto;
                    display: grid;
                    gap: 1em
                }
                input, button, textarea {
                    width: 500px;
                    padding: 4px 9px;
                    font-size: 20px;
                }
                textarea {
                    min-height: 150px;
                }
                button {
                    cursor: pointer;
                }
                .error {
                    color: red;
                    text-align: center;
                }
            `}</style>
        </form>
    )
}
