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
        if (isLoading) return (
            <button className="btn">
                <span className="loading loading-spinner"></span>
                loading
            </button>
        );
        if (data.email) return (
            <details className="dropdown ">
                <summary className="btn m-1" >
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-12 rounded-full">
                            <span>SY</span>
                        </div>
                    </div>
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><Link to="/account" key="account">My Account</Link></li>
                    <li><Link to="/logout" key="logout">Logout</Link></li>
                </ul>
            </details>
        )
            ;
        else
            return (
                <>
                    <li><Link to="/login" key="login">Sign In</Link></li>
                    <li><Link to="/register/select" key="signup">Sign Up</Link></li>
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
