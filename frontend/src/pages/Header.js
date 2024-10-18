import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {authApi} from "../store";

const Header = () => {

    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(authApi());
    }, [dispatch]);
    // TODO : find a good way on if statement
    const renderBtn = () => {
        if (isLoading) return <div>Loading...</div>;
        if (data.email) return (
            <li><Link to="/logout" key="logout">Logout</Link></li>
        );
        else return (
            <>
                <li><Link to="/login" key="login">Sign In</Link></li>
                <li><Link to="/signup" key="signup">Sign Up</Link></li>
            </>
        )
    }

    return (
        <header className="navbar bg-base-100">
            <div className="flex-1">
                <a href="http://localhost:3000" className="btn btn-ghost text-xl">THU Helper</a>
            </div>
            <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">

                        {renderBtn()}
                    </ul>
            </div>
        </header>
    );
};

export default Header;
