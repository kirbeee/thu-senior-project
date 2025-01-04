import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../store";
import Skeleton from "../components/Skeleton";

function LandingPage() {
    const dispatch = useDispatch();
    const { user, loading, error} = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(authApi());
    }, [dispatch]);
    console.log(user)
    if(loading) return <Skeleton times={6} className="h-10 w-full"/>;
    if(user) return <div>Welcome to THU-helper</div>
    if(error) return <div>Error</div>;
}

export default LandingPage;