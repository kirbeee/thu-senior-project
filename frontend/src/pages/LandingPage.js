import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../store";
import Skeleton from "../components/Skeleton";

function LandingPage() {
    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(authApi());
    }, [dispatch]);
    if(isLoading) return <Skeleton times={6} className="h-10 w-full"/>;
    if(data) return <div>{data.email}</div>
    if(error) return <div>Error</div>;
}

export default LandingPage;