import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const formSubmit = async () => {
        if (!formData.message || (!formData.name && !formData.email)) {
            toast.error('Please enter a message and provide either your name or email.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        const previousFormData = { ...formData };
        setFormData({ name: '', email: '', message: '' });
        try {
            const res = await fetch('/api/ContactForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(previousFormData)
            });
            if (res.status === 201) {
                toast.success('🦄 Form submitted successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            toast.error('Form submission failed. Please try again.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.error(error);
        } finally {
            document.querySelector(`#home`)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id='contact' className="bg-contact py-20 px-10 md:px-16">
            <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8">
                <h2 className="text-3xl text-gray-100 font-bold text-center flex flex-col items-center">
                    CONTACT
                    <div className='bg-purple-500 w-8 mt-6 mb-4 rounded h-1'></div>
                </h2>
                <p className="text-gray-300 text-lg md:text-xl lg:px-40 text-center">
                    Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                </p>
                <div className='lg:ml-40 lg:mr-40 md:ml-30 md:mr-30 sm:ml-20 sm:mr-10 m-2'>
                    <div className="sm:col-span-4 mt-6">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4 mt-6">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="col-span-full mt-6">
                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-300">
                            Message
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="message"
                                name="message"
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                                className="bg-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="mt-3 mb-3 text-sm leading-6 text-gray-500">Write your message here.</p>
                    </div>
                    <button
                        className="inline-block text-xl rounded hover:text-purple-500 bg-purple-500 hover:bg-gray-100 px-14 py-3 text-gray-100 font-semibold shadow-neumorphism-dark hover:shadow-neumorphism-dark transition-all duration-300"
                        style={{ transitionDelay: '0.05s' }}
                        onClick={formSubmit}>
                        CONTACT
                    </button>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default ContactMe;
