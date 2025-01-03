import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../store";

const Header = () => {
    const { user, isLoading } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authApi()); // 觸發 authApi 來獲取用戶資料
    }, [dispatch]); // 這裡只需在組件首次渲染時觸發一次

    const renderBtn = () => {
        // 如果正在加載用戶資料
        if (isLoading) {
            return (
                <button className="btn">
                    <span className="loading loading-spinner"></span>
                    loading
                </button>
            );
        }

        // 如果用戶未登入
        if (!user) {
            return (
                <>
                    <li><Link to="/login">Sign In</Link></li>
                    <li><Link to="/register/select">Sign Up</Link></li>
                </>
            );
        }

        // 如果用戶已登入
        return (
            <details className="dropdown">
                <summary className="btn m-1">
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-12 rounded-full">
                            {/*<span>{user.username.charAt(0).toUpperCase()}</span>*/}
                        </div>
                    </div>
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box w-52">
                    <li><Link to="/account">Settings</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </details>
        );
    };

    return (
        <header className="navbar bg-base-100">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost text-xl">THU Helper</a>
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
