'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const OurTeachersSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-xl text-blue-500 font-bold mb-2">Our Teachers</h6>
          <h2 className="text-3xl font-bold mb-4">Meet Our Instructors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Instructor 1 */}
          <motion.div
            className="group bg-white p-6 text-center shadow-lg rounded-lg h-96 hover:border-b-4 hover:border-black transition-all duration-300 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={itemVariants}
          >
            <div className="relative overflow-hidden mb-4">
              <Image
                src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg"
                alt="Alfredo Torres"
                className="h-40 w-40 mx-auto rounded-full transition-transform duration-300 group-hover:-translate-y-2"
                width={150}
                height={150}
              />
            </div>
            <h5 className="text-lg font-bold">Alfredo Torres</h5>
            <p className="text-sm text-gray-600">German Instructor</p>
          </motion.div>
          {/* Instructor 2 */}
          <motion.div
            className="group bg-white p-6 text-center shadow-lg rounded-lg h-96 hover:border-b-4 hover:border-black transition-all duration-300 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={itemVariants}
          >
            <div className="relative overflow-hidden mb-4">
              <Image
                src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg"
                alt="Rufus Stewart"
                className="h-40 w-40 mx-auto rounded-full transition-transform duration-300 group-hover:-translate-y-2"
                width={150}
                height={150}
              />
            </div>
            <h5 className="text-lg font-bold">Rufus Stewart</h5>
            <p className="text-sm text-gray-600">Language Exchange Coordinator</p>
          </motion.div>
          {/* Instructor 3 */}
          <motion.div
            className="group bg-white p-6 text-center shadow-lg rounded-lg h-96 hover:border-b-4 hover:border-black transition-all duration-300 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={itemVariants}
          >
            <div className="relative overflow-hidden mb-4">
              <Image
                src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg"
                alt="Hannah Morales"
                className="h-40 w-40 mx-auto rounded-full transition-transform duration-300 group-hover:-translate-y-2"
                width={150}
                height={150}
              />
            </div>
            <h5 className="text-lg font-bold">Hannah Morales</h5>
            <p className="text-sm text-gray-600">Cultural Immersion Guide</p>
          </motion.div>
          {/* Instructor 4 */}
          <motion.div
            className="group bg-white p-6 text-center shadow-lg rounded-lg h-96 hover:border-b-4 hover:border-black transition-all duration-300 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={itemVariants}
          >
            <div className="relative overflow-hidden mb-4">
              <Image
                src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg"
                alt="Juliana Silva"
                className="h-40 w-40 mx-auto rounded-full transition-transform duration-300 group-hover:-translate-y-2"
                width={150}
                height={150}
              />
            </div>
            <h5 className="text-lg font-bold">Juliana Silva</h5>
            <p className="text-sm text-gray-600">Language Tutor</p>
          </motion.div>
        </div>
        <div className="text-center">
          <Link href="/teachers">
            <span className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300">
              See All Instructors
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTeachersSection;
