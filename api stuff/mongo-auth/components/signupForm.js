import route from "next/router";
import { useState } from "react"

export default function SignupForm({ type }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const signup = async e => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch(`/api/${type}`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email, password, username
            })
        });
        const data = await res.json();
        if (res.status === 201) {
            route.push('/login');
        }
        else {
            setError(data.error);
            setEmail('');
            setPassword('');
            setUsername('');
        }
        setLoading(false)
    }

    return (
        <form method="POST" onSubmit={signup}>
            <input placeholder="username - John Doe" type="text" value={username} onChange={e => setUsername(e.target.value)} required />
            <input placeholder="email - johnDoe@gmail.com" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input placeholder="secet password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button disabled={loading} type="submit">register</button>
            <div className="error">{error}</div>

            <style jsx>{`
                form {
                    margin: 1em auto;
                    display: grid;
                    width: 300px;
                    gap: 1em
                }
                input, button {
                    padding: 4px 9px;
                    font-size: 20px;
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
