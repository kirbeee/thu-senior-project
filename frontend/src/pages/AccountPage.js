import React from "react";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../lib/store";
import Skeleton from "../components/Skeleton";

function AccountPage() {
    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(authApi());
    }, [dispatch]);

    // Remove unused variable username, and use setters in onChange handlers
    // const [username, setUsername] = useState(data.username); // username is not used
    const [email, setEmail] = useState(data?.email || ""); // Use optional chaining and default value in case data is initially undefined
    const [firstName, setFirstName] = useState(data?.first_name || ""); // Use optional chaining and default value
    const [lastName, setLastName] = useState(data?.last_name || ""); // Use optional chaining and default value
    const [username, setUsername] = useState(data?.username || ""); // Keep username for display and potentially editing

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Implement update account API call here using username, email, firstName, lastName
        console.log("Form submitted with:", { username, email, firstName, lastName }); // For now, just log the data
    }

    if(isLoading) return <Skeleton times={6} className="h-10 w-full"/>;
    if(data) return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="input input-bordered flex items-center gap-2">
                First Name
                <input
                    type="text"
                    className="grow"
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} // Add onChange handler
                />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Last Name
                <input
                    type="text"
                    className="grow"
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} // Add onChange handler
                />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Email
                <input
                    type="text"
                    className="grow"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Add onChange handler
                />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Username
                <input
                    type="text"
                    className="grow"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Add onChange handler
                    disabled // Consider disabling username editing for now, or implement username update logic
                />
            </label>
            <button
                className="btn btn-primary"
                type="submit">
                Update Account
            </button>
        </form>
    )
    if (error) return <div>Error</div>;
    return null; // Add a default return to handle cases where isLoading and data are both false, and there is no error (initial state maybe)
}

export default AccountPage;