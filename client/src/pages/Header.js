import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">My Website</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/client/public" className="text-white hover:text-gray-300">Sing in</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
