'use client'
import Image from 'next/image';
import React from 'react';
import { RxCheckCircled } from 'react-icons/rx';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-20 mt-20">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col"
      >
        <h6 className="text-2xl font-semibold mb-4 text-blue-500">About</h6>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Unlock Your <br/> Language Potential <br/> Today</h2>
        <Image 
          src="/images/contact.jpg" 
          alt="About Image" 
          className="w-full rounded-md shadow-lg" 
          width={100}
          height={100}
          layout="responsive"
        />
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center md:items-start space-y-6 p-4 md:p-20"
      >
        <div className="text-lg font-semibold">Our Language Courses</div>
        <ul className="list-none text-left space-y-2">
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center"
          >
            <RxCheckCircled className="h-5 w-5 text-green-500 mr-2" />
            <span>Flexible Scheduling</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <RxCheckCircled className="h-5 w-5 text-green-500 mr-2" />
            <span>Customized Learning Experience</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center"
          >
            <RxCheckCircled className="h-5 w-5 text-green-500 mr-2" />
            <span>Experienced and Certified Teachers</span>
          </motion.li>
        </ul>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex space-x-4"
        >
          <div className="w-full md:w-40">
            <a href="https://10web-site.ai/2/glorious-teal/about-us/" className="block py-4 px-4 text-center bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300">More about us</a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
