'use client'
import Image from 'next/image';
import React from 'react';
import { FaChalkboardTeacher, FaClock, FaEnvelope, FaPhoneAlt, FaUserGraduate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className='bg-white'>
      <Nav />
      <div className="relative h-96 md:h-80">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg"
            alt="Language School"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          {/* Shadow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold">About Our School</h1>
        </div>
      </div>

      <div className="container mx-auto bg-white my-8 mb-0">
        <AboutContent />
        <Footer />
      </div>
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-20 mt-20">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col"
      >
        <h6 className="text-2xl font-semibold mb-4 text-blue-500">About Us</h6>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Discover the Joy of Learning German</h2>
        <Image 
          src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg" 
          alt="Classroom"
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
        <div className="text-lg font-semibold">Why Choose Us?</div>
        <ul className="list-none text-left space-y-2">
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center"
          >
            <FaChalkboardTeacher className="h-5 w-5 text-green-500 mr-2" />
            <span>Expert Instructors</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <FaClock className="h-5 w-5 text-green-500 mr-2" />
            <span>Flexible Class Schedules</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center"
          >
            <FaUserGraduate className="h-5 w-5 text-green-500 mr-2" />
            <span>Proven Success Record</span>
          </motion.li>
        </ul>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex space-x-4"
        >
          <div className="w-full md:w-40">
            <a href="/courses" className="block py-4 px-4 text-center bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300">Explore Courses</a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
