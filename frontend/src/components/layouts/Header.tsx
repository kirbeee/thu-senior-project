import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../../lib/store";
import { useRouter } from 'next/router';
import {useTranslation} from "next-i18next";
import { RootState } from '@lib/store';

const Header = () => {
    // 使用 RootState 類型來指定 useSelector 的 state 參數類型
    const { user, loading } = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {t, i18n} = useTranslation('header'); //  指定命名空間為 'header'

    useEffect(() => {
        if (!user && router.pathname !== '/auth/LoginPage' && router.pathname !== '/auth/RegistrationSelector') {
            // @ts-ignore TODO: fix this
            dispatch(authApi());
        }
    }, [dispatch, user, router.pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // 切換 i18next 的語系
        router.push(router.pathname, router.asPath, { locale: lng }); // 使用 router.push 更新 Next.js 路由，帶入 locale 參數
    };


    const renderLanguageSelector = () => (
        <div className="dropdown dropdown-hover">
            <button tabIndex={0} className="btn btn-outline">
                {t('language')}
            </button>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><button onClick={() => changeLanguage('en')}>English</button></li>
                <li><button onClick={() => changeLanguage('zh-TW')}>繁體中文</button></li>
            </ul>
        </div>
    );

    const renderBtn = () => {
        if (loading) {
            return (
                <button className="btn">
                    <span className="loading loading-spinner"></span>
                    {t('loading')} {/* 使用 t('loading') 從 header.json 取得翻譯 */}
                </button>
            );
        }

        if (!user) {
            return (
                <>
                    <li><Link href="/auth/login">{t('signIn')}</Link> {/* 使用 t('signIn') 從 header.json 取得翻譯 */}</li>
                    <li><Link href="/auth/registrationSelector">{t('signUp')}</Link> {/* 使用 t('signUp') 從 header.json 取得翻譯 */}</li>
                </>
            );
        }

        return (
            <details className="dropdown dropdown-end md:dropdown-hover"> {/* 平板以上 hover 觸發 */}
                <summary className="btn m-1">
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-12 rounded-full">
                            <span>{user}</span>
                        </div>
                    </div>
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box w-52">
                    <li><Link href="/AccountPage">{t('settings')}</Link> {/* 使用 t('settings') 從 header.json 取得翻譯 */}</li>
                    <li><Link href="/auth/logout">{t('logout')}</Link> {/* 使用 t('logout') 從 header.json 取得翻譯 */}</li>
                </ul>
            </details>
        );
    };

    return (
        <header className="navbar bg-base-100 relative">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">THU Helper</Link> {/*  "THU Helper"  通常不需要翻譯，保持不變 */}
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
                    <li><Link href="/">{t('home')}</Link> {/* 使用 t('home') 從 header.json 取得翻譯 */}</li>
                    <li><Link href="/bbs">{t('discussion')}</Link> {/* 使用 t('discussion') 從 header.json 取得翻譯 */}</li>
                    <li><Link href="/courses">{t('courses')}</Link> {/* 使用 t('courses') 從 header.json 取得翻譯 */}</li>
                    <li><Link href="/AboutPage">{t('about')}</Link> {/* 使用 t('about') 從 header.json 取得翻譯 */}</li>
                </ul>
            </div>

            {/* 行動裝置選單 (垂直下拉選單) - 平板以上尺寸隱藏，根據 isMobileMenuOpen 狀態決定是否顯示 */}
            <div className={`md:hidden absolute top-full right-0 bg-base-100 rounded-box shadow-md w-full z-10 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="menu menu-vertical w-full rounded-box">
                    <li><Link href="/">{t('home')}</Link> {/* 使用 t('home') 從 header.json 取得翻譯 */}</li>
                    <li><Link href="/bbs">{t('discussion')}</Link> {/* 使用 t('discussion') 從 header.json 取得翻譯 */}</li>
                    <li><Link href="/courses">{t('courses')}</Link> {/* 使用 t('courses') 從 header.json 取得翻譯 */}</li>
                    <li><Link href="/AboutPage">{t('about')}</Link> {/* 使用 t('about') 從 header.json 取得翻譯 */}</li>
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