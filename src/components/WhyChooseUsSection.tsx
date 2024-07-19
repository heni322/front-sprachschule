'use client'
import Image from 'next/image';
import React from 'react';
import { RxCheckCircled } from 'react-icons/rx';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-20">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left px-4 py-8 md:py-20"
          >
            <div className="text-center mb-12">
              <h6 className="text-md text-blue-500 font-bold mb-2">WHY CHOOSE US</h6>
              <h2 className="text-3xl font-bold mb-4">Why You Should Choose Us</h2>
              <p className="text-sm mb-8">At Trappen Sprachschule, we are committed to providing our students with the best possible learning experience. Our courses are designed to be engaging, effective, and tailored to the needs of each individual learner.</p>
            </div>
            <ul className="space-y-8">
              <li className="flex items-start p-5">
                <RxCheckCircled className="mr-4 text-5xl text-blue-500" />
                <div>
                  <h5 className="text-lg font-bold">Experienced Teachers</h5>
                  <p className="text-sm">Our experienced and certified teachers use modern teaching methods to create an engaging and effective learning experience.</p>
                </div>
              </li>
              <li className="flex items-start p-5">
                <RxCheckCircled className="mr-4 text-4xl text-blue-500" />
                <div>
                  <h5 className="text-lg font-bold">Flexible Schedule</h5>
                  <p className="text-sm">We offer flexible scheduling options to accommodate the needs of our learners.</p>
                </div>
              </li>
              <li className="flex items-start p-5">
                <RxCheckCircled className="mr-4 text-4xl text-blue-500" />
                <div>
                  <h5 className="text-lg font-bold">Real-life Scenarios</h5>
                  <p className="text-sm">Our courses use real-life scenarios to ensure learners are prepared for practical language use.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-right px-4 py-8 md:py-20"
          >
            <div className="relative w-full h-64 md:h-96">
              <Image 
                src="/images/p2.jpg" 
                alt="Boy at music school learning to play drums"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
