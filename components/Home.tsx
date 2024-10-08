"use client";

import React from "react";

import Player from 'lottie-react';

import animationData from '../assets/json/animation.json';

const Home: React.FC = () => {

    const scrollToSection = (id: string) => {
        document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>
            <section id='home' className="bg-home py-20 text-center px-0 md:px-16">
                <div className="mx-auto max-w-7xl text-center py-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">HEY, I&apos;M ABHINAV VERMA</h1>
                    <p className="mt-12 text-gray-600 text-lg md:text-xl px-10 md:px-35 lg:px-40">
                        Dedicated to building and managing robust websites and web applications that drive success and elevate your digital presence to new heights.
                    </p>
                    <div className="mt-12">
                        <a
                            className="inline-block text-xl rounded hover:text-purple-500 bg-purple-500 hover:bg-gray-100 px-16 py-3 text-gray-100 font-semibold shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300 cursor-pointer"
                            style={{ transitionDelay: '0.05s' }}
                            onClick={() => scrollToSection('projects')}
                        >
                            PROJECTS
                        </a>
                    </div>
                </div>
                <div className="justify-center hidden md:flex items-end my-10">
                    <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('about')}>
                        <Player
                            autoplay
                            loop
                            animationData={animationData}
                            style={{ height: '75px', width: '75px' }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
