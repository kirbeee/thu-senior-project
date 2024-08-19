import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#courses" className="text-white hover:text-gray-400">找課程明細</a></li>
                        <li><a href="#reviews" className="text-white hover:text-gray-400">學長姐怎麼說</a></li>
                        <li><a href="#past-papers" className="text-white hover:text-gray-400">找考古題</a></li>
                        <li><a href="#graduation" className="text-white hover:text-gray-400">我要畢YA</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="text-white hover:text-gray-400">我的主頁</a></li>
                        <li><a href="#settings" className="text-white hover:text-gray-400">設定</a></li>
                        <li><a href="#logout" className="text-white hover:text-gray-400">登出</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
