"use client";

import Image from 'next/image';

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";

import github from "../assets/images/github.png"
import leetcode from "../assets/images/leetcode.png"
import linkdin from "../assets/images/linkdin.png"
import cv from "../assets/images/cv.png"


export default function page() {
    return (
        <>
            <aside className="hidden md:flex flex-col justify-center fixed left-0 top-0 bottom-0 w-14">
                <div className="p-1 bg-gray-100 space-y-3 rounded-r-lg">
                    <Image
                        src={github}
                        alt="Github"
                        className="w-14 hover:bg-purple-200 p-2 rounded"
                    />
                    <Image
                        src={linkdin}
                        alt="LinkdIn"
                        className="w-14 hover:bg-purple-200 p-2 rounded"
                    />
                    <Image
                        src={leetcode}
                        alt="LeetCode"
                        className="w-14 hover:bg-purple-200 p-2 rounded"
                    />
                    <Image
                        src={cv}
                        alt="CV"
                        className="w-14 hover:bg-purple-200 p-2 rounded"
                    />
                </div>
            </aside>
            <Navbar />
            <Home />
            <Footer />
        </>
    );
}
