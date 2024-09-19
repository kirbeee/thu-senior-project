import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "../components/Skeleton";

function LandingPage() {
    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    if(isLoading) return <Skeleton times={6} className="h-10 w-full"/>;
    if(error) return <div>Error</div>;
}

export default LandingPage;