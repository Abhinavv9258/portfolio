"use client";
import Image from 'next/image';
import React, { useState } from "react";
import profile from '../assets/images/profile.jpg';

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <header className="fixed w-full bg-gray-100 top-0 shadow-md z-50">
                <nav className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8">
                    <div className="container mx-auto flex items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 shadow-inner cursor-pointer flex items-center justify-center">
                                <Image
                                    src={profile}
                                    alt="Profile"
                                    className="rounded-full"
                                />
                            </div>
                            <span className="text-lg font-semibold hover:text-purple-500 cursor-pointer uppercase text-gray-800">Abhinav Verma</span>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-800 font-semibold hover:text-purple-500">Home</a>
                            <a href="#" className="text-gray-800 font-semibold hover:text-purple-500">About</a>
                            <a href="#" className="text-gray-800 font-semibold hover:text-purple-500">Projects</a>
                            <a href="#" className="text-gray-800 font-semibold hover:text-purple-500">Contact</a>
                        </div>

                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={toggleMobileMenu}
                                className="text-gray-500 hover:text-purple-800 focus:outline-none"
                            >
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>

                {mobileOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-gray-100 shadow-lg">
                        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                            <a href="#" onClick={toggleMobileMenu} className="block text-gray-800 hover:bg-gray-200 hover:text-purple-500 px-3 py-2 rounded-md text-base font-medium">Home</a>
                            <a href="#" onClick={toggleMobileMenu} className="block text-gray-800 hover:bg-gray-200 hover:text-purple-500 px-3 py-2 rounded-md text-base font-medium">About</a>
                            <a href="#" onClick={toggleMobileMenu} className="block text-gray-800 hover:bg-gray-200 hover:text-purple-500 px-3 py-2 rounded-md text-base font-medium">Projects</a>
                            <a href="#" onClick={toggleMobileMenu} className="block text-gray-800 hover:bg-gray-200 hover:text-purple-500 px-3 py-2 rounded-md text-base font-medium">Contact</a>
                        </div>
                    </div>
                )}
            </header>
            <div className="h-20 md:h-20"></div>
        </>
    );
};

export default Navbar;
