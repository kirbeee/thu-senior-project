import React, { useState } from "react";
import { loginApi } from "../../lib/store"; // 假設 loginApi 仍然來自你的 Redux store
import { useRouter } from "next/router"; // 使用 Next.js 的 useRouter
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
    const dispatch = useDispatch();
    // Remove unused variables: isAuthenticating, user, token, loading
    const { error } = useSelector((state) => state.users);

    const router = useRouter(); // Next.js 的 useRouter 替代 useNavigate

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginApi({ username, email, password }));
        if (error === null) {
            router.replace("/"); // 使用 router.replace 進行導航
        } else {
            console.error("Login failed:", error);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} onKeyDown={handleKeyPress} className="flex flex-col space-y-4">
            {error && <div className="alert alert-error">{error}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
            </div>}
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                </svg>
                <input
                    placeholder="Username"
                    type="username"
                    value={username}
                    className="grow"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                    <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                </svg>
                <input
                    className="grow"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"/>
                </svg>
                <input
                    className="grow"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /></label>
            <button
                className="btn btn-primary"
                type="submit">Login
            </button>
        </form>
    )
}

export default LoginPage;