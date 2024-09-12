import React from 'react'

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
                {/* Project items can go here */}
            </div>
        </section>
    );
};

export default Projects;

