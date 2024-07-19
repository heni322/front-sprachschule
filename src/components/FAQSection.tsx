'use client';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-xl text-blue-500 font-bold mb-2">FAQs</h6>
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className={`rounded-lg p-4 ${openIndex === 1 ? 'border border-gray-200 bg-white' : 'border-none'}`}>
                <h5
                  className="flex items-center justify-between text-lg font-bold cursor-pointer"
                  onClick={() => handleToggle(1)}
                >
                  <span className={openIndex === 1 ? 'text-blue-500' : ''}>What languages do you offer courses in?</span>
                  {openIndex === 1 ? <FaAngleUp className="text-blue-500" /> : <FaAngleDown />}
                </h5>
                {openIndex === 1 && (
                  <div className="mt-2">
                    We offer courses in the German language, which is our primary focus. However, we also offer Language Exchange programs and Cultural Immersion programs that provide opportunities to learn and practice other languages.
                  </div>
                )}
              </div>
              {/* FAQ 2 */}
              <div className={`rounded-lg p-4 ${openIndex === 2 ? 'border border-gray-200 bg-white' : 'border-none'}`}>
                <h5
                  className="flex items-center justify-between text-lg font-bold cursor-pointer"
                  onClick={() => handleToggle(2)}
                >
                  <span className={openIndex === 2 ? 'text-blue-500' : ''}>What is the duration of your courses?</span>
                  {openIndex === 2 ? <FaAngleUp className="text-blue-500" /> : <FaAngleDown />}
                </h5>
                {openIndex === 2 && (
                  <div className="mt-2">
                    The duration of our courses varies depending on the program and level of proficiency. Please contact us for more information on course schedules and durations.
                  </div>
                )}
              </div>
              {/* FAQ 3 */}
              <div className={`rounded-lg p-4 ${openIndex === 3 ? 'border border-gray-200 bg-white' : 'border-none'}`}>
                <h5
                  className="flex items-center justify-between text-lg font-bold cursor-pointer"
                  onClick={() => handleToggle(3)}
                >
                  <span className={openIndex === 3 ? 'text-blue-500' : ''}>Do you offer online courses?</span>
                  {openIndex === 3 ? <FaAngleUp className="text-blue-500" /> : <FaAngleDown />}
                </h5>
                {openIndex === 3 && (
                  <div className="mt-2">
                    Yes, we offer online courses that provide flexibility and convenience for learners who prefer to study from home or who live outside of our local area. Our online courses are designed to provide the same level of quality and engagement as our in-person courses.
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="space-y-4">
              {/* FAQ 4 */}
              <div className={`rounded-lg p-4 ${openIndex === 4 ? 'border border-gray-200 bg-white' : 'border-none'}`}>
                <h5
                  className="flex items-center justify-between text-lg font-bold cursor-pointer"
                  onClick={() => handleToggle(4)}
                >
                  <span className={openIndex === 4 ? 'text-blue-500' : ''}>What is the student-to-teacher ratio in your classes?</span>
                  {openIndex === 4 ? <FaAngleUp className="text-blue-500" /> : <FaAngleDown />}
                </h5>
                {openIndex === 4 && (
                  <div className="mt-2">
                    We maintain a low student-to-teacher ratio to ensure personalized attention and support for each learner. The average ratio for our courses is around 10:1, but this may vary depending on the program and level.
                  </div>
                )}
              </div>
              {/* FAQ 5 */}
              <div className={`rounded-lg p-4 ${openIndex === 5 ? 'border border-gray-200 bg-white' : 'border-none'}`}>
                <h5
                  className="flex items-center justify-between text-lg font-bold cursor-pointer"
                  onClick={() => handleToggle(5)}
                >
                  <span className={openIndex === 5 ? 'text-blue-500' : ''}>What is the proficiency level required to enroll in your courses?</span>
                  {openIndex === 5 ? <FaAngleUp className="text-blue-500" /> : <FaAngleDown />}
                </h5>
                {openIndex === 5 && (
                  <div className="mt-2">
                    Our courses are suitable for learners of all proficiency levels, from complete beginners to advanced learners. We offer a range of courses that cater to different needs and goals, and our knowledgeable instructors will work with you to determine the best course of study for your individual needs.
                  </div>
                )}
              </div>
              {/* FAQ 6 */}
              <div className={`rounded-lg p-4 ${openIndex === 6 ? 'border border-gray-200 bg-white' : 'border-none'}`}>
                <h5
                  className="flex items-center justify-between text-lg font-bold cursor-pointer"
                  onClick={() => handleToggle(6)}
                >
                  <span className={openIndex === 6 ? 'text-blue-500' : ''}>Do you offer any cultural activities or excursions?</span>
                  {openIndex === 6 ? <FaAngleUp className="text-blue-500" /> : <FaAngleDown />}
                </h5>
                {openIndex === 6 && (
                  <div className="mt-2">
                    Yes, we offer a range of cultural activities and excursions as part of our Cultural Immersion program. These activities provide learners with an opportunity to experience the language and culture of Germany firsthand and to practice their language skills in a real-world context.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
