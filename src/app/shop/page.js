"use client"

import React, { useState } from 'react';

const Page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-lg">Your Logo</div>
                    {/* <div className="lg:hidden">
                        <button
                            className="text-white hover:text-gray-300"
                            onClick={toggleMenu}
                        >
                            Menu
                        </button>
                    </div> */}
                    {/* <div className={`lg:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}> */}
                        {/* This will be shown on screens larger than lg (large) */}
                        <a href="#" className="text-white hover:text-gray-300 " >
                            Home
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            About
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            Services
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            Contact
                        </a>
                    </div>
                {/* </div> */}
            </nav>

            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-gray-200 p-8 rounded shadow-md w-96">
                    <h2 className="text-xl font-semibold mb-4 text-center">Login Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-2 border rounded w-full"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 p-2 border rounded w-full"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Page;

