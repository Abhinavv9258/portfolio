import React from "react";

import Image from 'next/image';

import github from "../assets/images/github.png";
import leetcode from "../assets/images/leetcode.png";
import linkdin from "../assets/images/linkdin.png";
import cv from "../assets/images/cv.png";

const Footer: React.FC = () => {
    return (
        <footer className="bg-footer py-8 text-center px-10 md:px-10" style={{ width: '100%' }}>
            <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8 flex flex-col-reverse md:flex-row justify-between">
                <div className="text-left md:text-left" style={{ width: '100%' }}>
                    <h2 className="text-xl font-semibold text-gray-100">ABHINAV VERMA</h2>
                    <p className="text-gray-400 mt-2">
                        A frontend-focused web developer dedicated to creating engaging and impactful web experiences that drive overall product success.
                    </p>
                </div>

                <div className="text-left md:text-center" style={{ width: '100%' }}>
                    <h3 className="text-lg font-semibold text-gray-100">SOCIAL</h3>
                    <div className="flex justify-start md:justify-center space-x-4 mt-4 mb-4">
                        <a href="https://www.linkedin.com/in/yourprofile" className="p-1 bg-gray-600 hover:bg-purple-400 rounded-full" target="_blank" rel="noopener noreferrer">
                            <Image src={linkdin} alt="LinkedIn" className="h-5 w-5" />
                        </a>
                        <a href="https://github.com/yourprofile" className="p-1 bg-gray-600 hover:bg-purple-400 rounded-full" target="_blank" rel="noopener noreferrer">
                            <Image src={github} alt="GitHub" className="h-5 w-5" />
                        </a>
                        <a href="https://leetcode.com/yourprofile" className="p-1 bg-gray-600 hover:bg-purple-400 rounded-full" target="_blank" rel="noopener noreferrer">
                            <Image src={leetcode} alt="Leetcode" className="h-5 w-5" />
                        </a>
                        <a href="/cv" className="p-1 bg-gray-600 hover:bg-purple-400 rounded-full" target="_blank" rel="noopener noreferrer">
                            <Image src={cv} alt="CV" className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8 text-center text-gray-500 mt-8">
                &copy;2024. Made by{" "}
                <a href="#" className="text-gray-100 font-semibold hover:underline hover:text-purple-400">Abhinav Verma</a>
                <br />Loosely designed and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
            </div>
        </footer>
    );
};

export default Footer;
