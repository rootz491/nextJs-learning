import decode from "jwt-decode";

// return bearer token
export async function useBearer() {
    try {
        const authToken = localStorage.getItem("authToken");
        const refreshToken = localStorage.getItem("refreshToken");
        if (!authToken || !refreshToken)
            return false;
        const token = decode(authToken)
        if (token.exp < new Date().getTime() / 1000) {
            const res = await fetch("/api/refresh", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    token: refreshToken
                })
            });
            const data = await res.json();
            if (res.status === 200) {
                localStorage.setItem("authToken", data.authToken)
                localStorage.setItem("refreshToken", data.refreshToken)
            }
            else {
                alert('your refresh token is expired, please log in again!');
            }
        }
        return `Bearer ${localStorage.getItem("authToken")}`
    } catch (error) {
        console.log(error)
        return false
    }
}

// return bool based on state of tokens
export async function useAuth() {
    const authToken = localStorage.getItem("authToken");
    const refreshToken = localStorage.getItem("refreshToken")
    if (!authToken || !refreshToken) return false
    try {
        const { exp } = decode(refreshToken)

        if (exp < new Date().getTime() / 1000) {
            useReset();
            return false  
        } 
    } catch (error) {
        return false
    }
    return true
}

// decode auth token and returns properties of User
export async function useUser() {
    try {
        const auth = await useAuth();
        if (auth) {
            const authToken = localStorage.getItem("authToken");
            const user = decode(authToken);
            return user;
        }
        else return false
    } catch (error) {
        return false;
    }
}

export function useReset() {
    localStorage.clear();
}