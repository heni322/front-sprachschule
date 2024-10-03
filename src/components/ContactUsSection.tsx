'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUsSection: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Column */}
          <div className="text-center md:text-left md:order-2 p-4 md:p-8 lg:p-20">
            <div className="mb-12">
              <h6 className="text-md text-blue-500 font-bold mb-2">CONTACT US</h6>
              <h2 className="text-3xl font-bold mb-4">Contact Us Today</h2>
              <p className="text-lg mb-8">
                For more information on our language courses, contact us today and speak with one of our knowledgeable representatives.
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-center md:justify-start">
              <div className="flex items-start p-5">
                <FaPhoneAlt className="mr-4 text-5xl text-blue-500" aria-label="Phone" />
                <div>
                  <h5 className="text-lg font-bold">Phone:</h5>
                  <p className="text-sm">+216 53 538 062</p>
                </div>
              </div>
              <div className="flex items-start p-5">
                <FaEnvelope className="mr-4 text-4xl text-blue-500" aria-label="Email" />
                <div>
                  <h5 className="text-lg font-bold">Email:</h5>
                  <p className="text-sm">info@academy-trappen.com</p>
                </div>
              </div>
            </div>
            <div className="text-center md:text-left mt-12">
              <Link href="/contact">
                <p className="bg-blue-500 text-white py-2 px-4 rounded inline-block hover:bg-blue-600 transition duration-300" aria-label="Send a Message">
                  Send a Message
                </p>
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="p-4 md:p-8 lg:p-20">
            <Image 
              src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg" 
              className="mx-auto max-w-full rounded-lg" 
              alt="Teacher and student in the classroom"
              width={500}
              height={300}
              priority // Optional: if this image is important and should be loaded quickly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
