import React from "react";

const AboutMe: React.FC = () => {

    return (
        <section className="bg-about py-20 px-10 md:px-16">
            <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8">
                <h2 className="text-3xl text-gray-100 font-bold text-center flex flex-col items-center">
                    ABOUT ME
                    <div className='bg-purple-500 w-8 mt-6 mb-4 rounded h-1'></div>
                </h2>
                <p className="text-gray-300 text-lg md:text-xl lg:px-40 text-center">
                    Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                </p>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="lg:w-1/2 lg:mr-20 mt-14">
                        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                            Get to know me!
                        </h3>
                        <p className="text-gray-400 text-lg mb-4 text-justify">
                            I&apos;m a <span className="font-bold text-gray-300">Frontend Focused Web Developer</span> building and managing the
                            Front-end of Websites and Web Applications that leads to the success of
                            the overall product. Check out some of my work in the <span className="font-bold text-gray-300">Projects</span> section.
                        </p>
                        <p className="text-gray-400 mb-4 text-lg text-justify">
                            I also like sharing content related to the stuff that I have learned over the
                            years in <span className="font-bold text-gray-300">Web Development</span> so it can help other people of the Dev
                            Community. Feel free to Connect or Follow me on my <a href="#" className="text-purple-500 font-semibold hover:underline">LinkedIn</a> and <a href="#" className="text-purple-500 font-semibold hover:underline">GitHub</a> where I post useful content related to Web Development and Programming.
                        </p>
                        <p className="text-gray-400 mb-6 text-lg text-justify">
                            I&apos;m open to <span className="font-bold text-gray-300">Job</span> opportunities where I can contribute, learn and grow. If
                            you have a good opportunity that matches my skills and experience then
                            don&apos;t hesitate to <a href="#" className="text-purple-500 font-semibold hover:underline">contact</a> me.
                        </p>
                        <button
                            className="inline-block text-xl rounded hover:text-purple-500 bg-purple-500 hover:bg-gray-100 px-14 py-3 text-gray-100 font-semibold shadow-neumorphism-dark hover:shadow-neumorphism-dark transition-all duration-300"
                            style={{ transitionDelay: '0.05s' }}
                            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            CONTACT
                        </button>
                    </div>

                    <div className="lg:w-1/2 mt-14">
                        <h3 className="text-2xl font-semibold text-gray-100 mb-4">My Skills</h3>
                        <div className="flex flex-wrap">
                            {["HTML", "CSS", "JavaScript", "React.js", "Next.js", "PHP", "Bootstrap", "GIT", "Github", "Node.js", "Responsive Design", "C/C++", "Typescript", "Tailwind", "Prisma"].map(skill => (
                                <span key={skill} className="bg-gray-100 p-2 mb-4 mr-4 rounded text-gray-800 font-semibold">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
