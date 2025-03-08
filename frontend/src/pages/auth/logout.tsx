import React from "react"; // Import React here
import {useEffect} from "react";
import { logoutApi } from "../../lib/store";
import {useDispatch, useSelector} from "react-redux";
import Skeleton from "@components/ui/Skeleton";

function Logout(){
    const dispatch = useDispatch();
    // @ts-ignore
    const {isLoading, error} = useSelector((state) => state.users);

    useEffect(() => {
        // @ts-ignore
        dispatch(logoutApi());
        localStorage.removeItem('authToken');
    }, [dispatch]);
    if(isLoading) return <Skeleton times={6} className="h-10 w-full"/>;
    if(error) return <div>error</div>;

    return null; // Add a return null to satisfy react component return requirement, as LogoutPage might not render anything visually. Or you can return a message or redirect.
}

export default Logout;