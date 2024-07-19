'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const ProgramSection = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="text-center">
        <h6 className="text-xl text-blue-500 font-bold mb-4">Our Program</h6>
        <h2 className="text-4xl font-bold mb-8">Grade Programs</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        {/* Program Item 1 */}
        <motion.div 
          className="bg-white px-10 py-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-64 mb-4">
            <Image 
              src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg" 
              alt="Program 1" 
              className="rounded-lg object-cover"
              fill
            />
          </div>
          <h5 className="text-3xl font-bold mb-2">German Course</h5>
          <p className="text-gray-700">Our German course is designed to help learners of all levels improve their language skills in a dynamic and supportive environment. With a focus on real-life scenarios, our course covers everything from basic grammar to advanced conversation.</p>
          <a href="#" className="text-blue-500 mt-4 inline-block">Read More <i className="fas fa-angle-right ml-1"></i></a>
        </motion.div>
        {/* Program Item 2 */}
        <motion.div 
          className="bg-white px-10 py-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative w-full h-64 mb-4">
            <Image 
              src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg" 
              alt="Program 2" 
              className="rounded-lg object-cover"
              fill
            />
          </div>
          <h5 className="text-3xl font-bold mb-2">Language Exchange</h5>
          <p className="text-gray-700">Our language exchange program offers a unique opportunity to practice your language skills with native speakers and other learners from around the world. With a focus on conversation and cultural exchange, this program is perfect for students looking to improve their fluency and cultural awareness.</p>
          <a href="#" className="text-blue-500 mt-4 inline-block">Read More <i className="fas fa-angle-right ml-1"></i></a>
        </motion.div>
        {/* Program Item 3 */}
        <motion.div 
          className="bg-white px-10 py-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative w-full h-64 mb-4">
            <Image 
              src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg" 
              alt="Program 3" 
              className="rounded-lg object-cover"
              fill
            />
          </div>
          <h5 className="text-3xl font-bold mb-2">Cultural Immersion</h5>
          <p className="text-gray-700">Our cultural immersion program is designed to provide learners with a deep understanding of the language and culture of the target country. With opportunities to explore local customs, traditions and history, this program is perfect for students looking to gain a deeper appreciation of the language and culture they are studying.</p>
          <a href="#" className="text-blue-500 mt-4 inline-block">Read More <i className="fas fa-angle-right ml-1"></i></a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgramSection;
