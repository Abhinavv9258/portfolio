"use client";

import Image from 'next/image';
import * as React from 'react';

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

import github from "../assets/images/github.png"
import leetcode from "../assets/images/leetcode.png"
import linkdin from "../assets/images/linkdin.png"
import cv from "../assets/images/cv.png"


export default function page() {

    const handleClick = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <aside className="hidden md:flex flex-col justify-center fixed left-0 top-0 bottom-0 w-14">
                <div className="p-1 bg-gray-100 space-y-3 rounded-r-lg">
                    <Image
                        src={github}
                        alt="Github"
                        onClick={() => handleClick('https://github.com/Abhinavv9258')}
                        className="w-14 hover:bg-purple-200 p-2 rounded cursor-pointer"
                    />
                    <Image
                        src={linkdin}
                        alt="LinkdIn"
                        onClick={() => handleClick('https://www.linkedin.com/in/abhinav-verma-774349200/')}
                        className="w-14 hover:bg-purple-200 p-2 rounded cursor-pointer"
                    />
                    <Image
                        src={leetcode}
                        alt="LeetCode"
                        onClick={() => handleClick('https://leetcode.com/u/Abhinavv9258/')}
                        className="w-14 hover:bg-purple-200 p-2 rounded cursor-pointer"
                    />
                    <Image
                        src={cv}
                        alt="CV"
                        onClick={() => handleClick('https://drive.google.com/file/d/1jfStsz96nlhoMxVS4aQiK1fER1mI3qzy/view?usp=sharing')}
                        className="w-14 hover:bg-purple-200 p-2 rounded cursor-pointer"
                    />
                </div>
            </aside>
            <Navbar />
            <Home />
            <AboutMe />
            <Projects />
            <ContactMe />
            <Footer />
        </>
    );
}
