import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Navbar(props) {
    const [initialMode, setInitialMode] = useState('dark'); // State to store initial mode

    useEffect(() => {
        // Check if the user prefers dark mode
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        // Set initial mode based on user's preference
        setInitialMode(prefersDarkMode ? 'dark' : 'light');
    }, []);

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${initialMode} bg-${initialMode}`}>
                <div className="container border-gray-400 mx-auto my-4 flex justify-between items-center">
                    <Link href="/" className="text-lg font-bold text-blue-500">TextUtills</Link>
                    <Link className="text-blue-600 hover:text-blue-500" aria-current="page" href="/">Home</Link>

                    <button title='dfsdfs' className="block lg:hidden text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:w-auto" id="navbarSupportedContent">
                        
                        <label className="mx-4 inline-flex items-center cursor-pointer">
                            <input onClick={props.toggleMode} type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ms-3 text-blue-600 text-sm font-medium">Dark mode</span>
                        </label>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
