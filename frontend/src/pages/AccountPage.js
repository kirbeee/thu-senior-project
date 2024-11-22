import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../store";
import Skeleton from "../components/Skeleton";

function AccountPage() {
    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(authApi());
    }, [dispatch]);

    const [username, setUsername] = useState(data.username);
    const [email, setEmail] = useState(data.email);
    const [firstName, setFirstName] = useState(data.first_name);
    const [lastName, setLastName] = useState(data.last_name);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    if(isLoading) return <Skeleton times={6} className="h-10 w-full"/>;
    if(data) return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="input input-bordered flex items-center gap-2">
                First Name
                <input type="text" className="grow" placeholder="first name" value={firstName}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Last Name
                <input type="text" className="grow" placeholder="last name" value={lastName}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow" placeholder="email" value={email}/>
            </label>
        </form>
    )
    if (error) return <div>Error</div>;
}

export default AccountPage;