import route from "next/router";
import { useState } from "react"

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const login = async e => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch("/api/login", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if (res.status === 200) {
            localStorage.setItem("authToken", data.authToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            route.push('/profile');
        }
        else {
            setError(data.error);
            setEmail('');
            setPassword('');
        }
        setLoading(false)
    }

    return (
        <form method="POST" onSubmit={login}>
            <input placeholder="johnDoe@gmail.com" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input placeholder="secet password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button disabled={loading} type="submit">login</button>
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
