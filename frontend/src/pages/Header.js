import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar bg-base-100">
            <div className="flex-1">
                <a href="http://localhost:3000" className="btn btn-ghost text-xl">THU Helper</a>
            </div>
            <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/login" key="login" className="text-white hover:text-gray-300">Sing in</Link></li>
                    </ul>
            </div>
        </header>
    );
};

export default Header;
