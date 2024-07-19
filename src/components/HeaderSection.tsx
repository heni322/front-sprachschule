'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function HeaderSection() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 font-sans text-base p-4 lg:p-12'>
      {/* First Div: Image with Overlay Testimonial */}
      <div className='relative w-full h-64 lg:h-auto'>
        <Image
          src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg"
          alt="School Image"
          layout='fill'
          objectFit='cover'
          className='rounded-md'
        />
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='absolute bottom-4 right-4 bg-white bg-opacity-90 text-gray-800 p-4 rounded-md max-w-xs shadow-lg'
        >
          <div className='relative'>
            <p className='mb-2 pl-4 border-l-4 border-blue-600'>
              <span>I have been attending the German course for several months now and I can already see a significant improvement in my language skills. The teachers are knowledgeable and supportive, and the learning materials are well-designed and effective.</span>
            </p>
            <h5 className='font-semibold'>Olivia Wilson</h5>
          </div>
        </motion.div>
      </div>
      {/* Second Div: Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
        className='flex flex-col justify-center w-full p-4 lg:p-12'
      >
        <h1 className='text-md font-semibold text-blue-500 mb-2'>WELCOME TO TRAPPEN SPRACHSCHULE</h1>
        <h2 className='text-3xl font-bold mb-4'>Trappen <br/> Sprachschule - <br/> Learn languages with <br/> ease</h2>
        <p className='text-gray-700 mb-4'>
          At Trappen Sprachschule, we offer a range of language courses designed to meet the needs of learners at all levels.
          Our experienced and certified teachers use modern teaching methods to create an engaging and effective learning experience.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 w-40'
        >
          GET STARTED
        </motion.button>
      </motion.div>
    </div>
  )
}

export default HeaderSection