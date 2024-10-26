import React from 'react'
import Image from 'next/image';

import railpatri from '../assets/images/railpatri.png';
import mytodo from '../assets/images/mytodo.png';
import elearn from '../assets/images/elearn.png';
import portfolio from '../assets/images/portfolio.png';
import ProjectModel from './ProjectModel';

const Projects: React.FC = () => {
    return (
        <section id='projects' className="bg-projects py-20 px-10 md:px-16">
            <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8">
                <h2 className="text-3xl text-gray-800 font-bold text-center flex flex-col items-center">
                    PROJECTS
                    <div className='bg-purple-500 w-8 mt-6 mb-4 rounded h-1'></div>
                </h2>
                <p className="text-gray-600 text-lg md:text-xl lg:px-40 text-center">
                    Here are some of the projects I have worked on.
                </p>
                <ProjectModel
                    title="E-Learn"
                    alt="E-Learn"
                    src={elearn}
                    description="E-Learn is a comprehensive online learning portal with various functionalities and pages that cater to both users and administrators. Here's a list of its key features and pages: Landing Page, Separate Accounts for User & Admin, Sign-In/Sign-Out Functionality, Course Page (Admin can Add, Remove, Update Courses), CRUD Operation (Create, Read, Update, Delete)."
                />
                <ProjectModel
                    title="Portfolio"
                    alt="Portfolio"
                    src={portfolio}
                    description="A personal portfolio website to showcase my projects, skills, and experience. Built with Next.js, Tailwind CSS, and React, the site features a fully responsive layout and interactive sections for About Me, Projects, and Contact Me."
                />
                <ProjectModel
                    title="Rail-Patri"
                    alt="RailPatri"
                    src={railpatri}
                    description="RailPatri is a railway management project that utilizes a combination of technologies to build its web-based user interface and handle backend functionalities. The tech stack used in RailPatri includes: HTML5, CSS, JavaScript, PHP, and Bootstrap."
                />
                <ProjectModel
                    title="My To-Do App"
                    alt="My To-Do App"
                    src={mytodo}
                    description="This project combines modern web technologies to create a dynamic and user-friendly Todo application. It emphasizes interactive features, a polished user interface, and robust backend support for persistent and reliable task management."
                />
            </div>
        </section>
    );
};

export default Projects;