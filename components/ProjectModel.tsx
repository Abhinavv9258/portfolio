import React from 'react';
import Image, { StaticImageData } from 'next/image';



const ProjectModel: React.FC<{ title: string; alt: string; src: StaticImageData; description: string; }> = ({ title, alt, src, description }) => {
    return (
        <>
            <div className='m-2'>
                <a className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700' style={{background: "linear-gradient(145deg, #252525, #3a3a3a)"}}>
                    <Image className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg' src={src} alt={alt} />
                    <div className='flex flex-col justify-between p-4 leading-normal'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default ProjectModel;
