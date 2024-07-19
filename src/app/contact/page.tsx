'use client'
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Image from 'next/image';
import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className='bg-white'>
        <Nav />
        <div className="relative h-96 md:h-80">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/plane.jpg"
                    alt="Plane"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
                {/* Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h1 className="text-3xl font-bold">Contact Us</h1>
            </div>
        </div>
        <div className="container mx-auto bg-white my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Column 1: Text and Form */}
                <div className='p-4 md:p-20'>
                    <h6 className="text-lg font-semibold mb-2 text-blue-500">Contact Us</h6>
                    <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                    <p className="mb-6 md:pr-20">Please feel free to contact us for any inquiries, questions, or feedback. Our knowledgeable team is dedicated to providing superior customer service and will be happy to assist you with any information you need. You can reach us by phone, email, or visit our office during business hours.</p>
                    <div className="flex flex-col md:flex-row md:space-x-10">
                        <div className="flex items-start p-5">
                            <FaPhoneAlt className="mr-4 text-5xl text-blue-500" />
                            <div>
                            <h5 className="text-lg font-bold">Phone:</h5>
                            <p className="text-sm">+216 53 538 062</p>
                            </div>
                        </div>
                        <div className="flex items-start p-5">
                            <FaEnvelope className="mr-4 text-4xl text-blue-500" />
                            <div>
                            <h5 className="text-lg font-bold">Email:</h5>
                            <p className="text-sm">info@academy-trappen.com</p>
                            </div>
                        </div>
                    </div>
                    <form className="mb-8 mt-10 md:pr-20">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Username
                            </label>
                            <input type="text" id="username" name="username"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Username"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" autoComplete="email" placeholder="Your Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                            <textarea id="message" name="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                {/* Column 2: Image */}
                <div className='p-4 md:p-20 mt-4 md:mt-0'>
                    <Image
                        src="/images/plane.jpg"
                        alt="Image"
                        className="w-full rounded-md shadow-lg"
                        width={100}
                        height={100} />
                </div>
            </div>
            {/* Google Maps Section */}
            <div className="grid grid-cols-1">
                <div className="h-full w-full p-4 md:p-20">
                    <h6 className="text-lg font-semibold mb-2 text-blue-500">Maps</h6>
                    <h2 className="text-4xl font-bold mb-4">Find us on maps</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d808.6494173645561!2d10.593410143188361!3d35.834345756507695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDUwJzAzLjciTiAxMMKwMzUnMzYuMSJF!5e0!3m2!1sen!2stn!4v1718063607567!5m2!1sen!2stn" 
                            style={{ width: '100%', height: '500px', border:0 }} // Set the width and height
                            loading="lazy" 
                            className="rounded-lg shadow-lg"
                            title="Avenue Yasser Arafet, Sahloul 1" 
                            aria-label="Avenue Yasser Arafet, Sahloul 1" 
                            // referrerpolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default ContactUs
