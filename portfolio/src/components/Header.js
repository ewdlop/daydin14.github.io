// Dependencies
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import NavMenu from './NavMenu';
import LeftSidePanel from './LeftSidePanel';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Function to update progress bar width based on scroll position
    const updateProgressBar = () => {
        const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        const scrollPercentage = (scrollPosition / scrollTotal) * 100;
        document.getElementById('progress-bar').style.width = `${scrollPercentage}%`;
    };

    // Add event listener for scroll event
    useEffect(() => {
        window.addEventListener('scroll', updateProgressBar);
        return () => {
            window.removeEventListener('scroll', updateProgressBar);
        };
    }, []);

    // Reset progress bar on route change
    useEffect(() => {
        document.getElementById('progress-bar').style.width = '0%';
    }, [location]);

    return (
        <>
            <header className="bg-gray-200 dark:bg-gray-900 p-4 fixed top-0 left-0 w-full z-10">
                <div className="flex justify-start items-center">
                    <button onClick={toggleSidebar} className="hamburger-menu text-black dark:text-white mr-4">
                        <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
                    </button>
                    <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">David Aydin</h1>
                </div>
                <NavMenu />
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 mt-4">
                    <div id="progress-bar" className="bg-blue-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                </div>
            </header>
            {/* Left Side Panel */}
            <LeftSidePanel isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};

export default Header