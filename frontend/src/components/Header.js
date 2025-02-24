import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../lib/store";
import { useRouter } from 'next/router';

const Header = () => {
    const { user, isLoading } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 管理手機選單開關狀態

    useEffect(() => {
        if (!user && router.pathname !== '/auth/LoginPage' && router.pathname !== '/auth/RegistrationSelector') {
            dispatch(authApi());
        }
    }, [dispatch, user, router.pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Language selector dropdown as a reusable function
    const renderLanguageSelector = () => (
        <div className="dropdown dropdown-hover">
            <button tabIndex={0} className="btn btn-outline">
                Language
            </button>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/en">English</Link></li>
                <li><Link href="/zh-TW" >繁體中文</Link></li>
            </ul>
        </div>
    );

    const renderBtn = () => {
        if (isLoading) {
            return (
                <button className="btn">
                    <span className="loading loading-spinner"></span>
                    loading
                </button>
            );
        }

        if (!user) {
            return (
                <>
                    <li><Link href="/auth/LoginPage">Sign In</Link></li>
                    <li><Link href="/auth/RegistrationSelector">Sign Up</Link></li>
                </>
            );
        }

        return (
            <details className="dropdown dropdown-end md:dropdown-hover"> {/* 平板以上 hover 觸發 */}
                <summary className="btn m-1">
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-12 rounded-full">
                            {/*<span>{user.username.charAt(0).toUpperCase()}</span>*/}
                        </div>
                    </div>
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box w-52">
                    <li><Link href="/AccountPage">Settings</Link></li>
                    <li><Link href="/auth/LogoutPage">Logout</Link></li>
                </ul>
            </details>
        );
    };

    return (
        <header className="navbar bg-base-100 relative">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">THU Helper</Link>
            </div>

            {/* 行動裝置選單按鈕 (漢堡圖示) - 平板以上尺寸隱藏 */}
            <div className="md:hidden">
                <button className="btn btn-square btn-ghost" onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* 桌機/平板選單 (水平選單) - 手機尺寸隱藏 */}
            <div className="hidden md:flex flex-1 justify-center">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/bbs/Board">Discussion</Link></li>
                    <li><Link href="/CoursePage">Courses</Link></li>
                    <li><Link href="/AboutPage">About</Link></li>
                </ul>
            </div>

            {/* 行動裝置選單 (垂直下拉選單) - 平板以上尺寸隱藏，根據 isMobileMenuOpen 狀態決定是否顯示 */}
            <div className={`md:hidden absolute top-full right-0 bg-base-100 rounded-box shadow-md w-full z-10 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="menu menu-vertical w-full rounded-box">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/frontend/src/pages/bbs/Board">Discussion</Link></li>
                    <li><Link href="/CoursePage">Courses</Link></li>
                    <li><Link href="/AboutPage">About</Link></li>
                    <li>{renderLanguageSelector()}</li>
                    {renderBtn()} {/* 行動裝置選單中也加入登入/註冊/帳戶按鈕 */}
                </ul>
            </div>

            {/* 登入/註冊/帳戶及語言選擇器區塊 - 手機尺寸隱藏，平板以上尺寸顯示 */}
            <div className="hidden md:flex flex-none items-center">
                <ul className="menu menu-horizontal px-1">
                    {renderBtn()}
                    <li>{renderLanguageSelector()}</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
