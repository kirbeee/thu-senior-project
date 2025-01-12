import React, {useState} from "react";
import { useRouter } from "next/router";
import {signupApi} from "../../lib/store";
import {useDispatch, useSelector} from "react-redux";

function StudentSignupPage(){
    const dispatch = useDispatch();
    const { user, loading, error} = useSelector((state) => state.users);

    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [studentID, setStudentID] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(signupApi({username, email, password1, password2, studentID}));
        router('/')
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="input input-bordered flex items-center gap-2">
                {/* TODO : fix the svg icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                >
                    <path d="M54.2,216a88.1,88.1,0,0,1,147.6,0"/>
                    <polygon
                        fill="none"
                        points="224 64 128 96 32 64 128 32 224 64"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    />
                    <path
                        d="M169.3,82.2a56,56,0,1,1-82.6,0"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    />
                </svg>
                <input
                    className="grow"
                    placeholder="Student ID"
                    type="text"
                    value={studentID}
                    onChange={(e) => setStudentID(e.target.value)}
                /></label>
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
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                /></label>
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
                    placeholder="Varify Password"
                    type="password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                /></label>
            <button
                className="btn btn-primary"
                type="submit">{loading? `Sign Up ${(
                <span className="loading loading-spinner loading-xs"></span>)}` : 'Sign Up'}
            </button>


        </form>
    )
}

export default StudentSignupPage;