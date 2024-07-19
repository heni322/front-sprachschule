'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const CounterSection = () => {
  const [countersAnimated, setCountersAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setCountersAnimated(true);
    }
  }, [inView]);

  const controls = useAnimation();

  useEffect(() => {
    if (countersAnimated) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" }
      });
    }
  }, [controls, countersAnimated]);

  return (
    <div ref={ref} className="relative flex flex-wrap justify-center gap-8 p-4 md:p-8 mt-20" style={{ height: "500px" }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg absolute inset-0"></div>
        <Image
          className="object-cover opacity-50 rounded-lg"
          src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg"
          alt="Background"
          fill
        />
      </div>
      {/* Counter Items */}
      <div className="relative z-10 flex flex-wrap justify-center items-center text-white space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
        {/* Counter Item 1 */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={controls} className="flex flex-col items-center justify-center text-center mx-4 my-8">
          <div className="text-4xl md:text-5xl text-blue-500 font-bold mb-2 md:mb-4">
            <CountUp start={0} end={100} duration={2.5} redraw={true} startOnMount={false} useEasing={countersAnimated} />+
          </div>
          <div className="text-base md:text-lg font-semibold">Awards Winning</div>
        </motion.div>
        {/* Counter Item 2 */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={controls} className="flex flex-col items-center justify-center text-center mx-4 my-8">
          <div className="text-4xl md:text-5xl text-blue-500 font-bold mb-2 md:mb-4">
            <CountUp start={0} end={500} duration={1.5} redraw={true} startOnMount={false} useEasing={countersAnimated} />+
          </div>
          <div className="text-base md:text-lg font-semibold">Our Equipments</div>
        </motion.div>
        {/* Counter Item 3 */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={controls} className="flex flex-col items-center justify-center text-center mx-4 my-8">
          <div className="text-4xl md:text-5xl text-blue-500 font-bold mb-2 md:mb-4">
            <CountUp start={0} end={250} duration={1.5} redraw={true} startOnMount={false} useEasing={countersAnimated} />+
          </div>
          <div className="text-base md:text-lg font-semibold">Field Expertise</div>
        </motion.div>
        {/* Counter Item 4 */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={controls} className="flex flex-col items-center justify-center text-center mx-4 my-8">
          <div className="text-4xl md:text-5xl text-blue-500 font-bold mb-2 md:mb-4">
            <CountUp start={0} end={50} duration={1.5} redraw={true} startOnMount={false} useEasing={countersAnimated} />+
          </div>
          <div className="text-base md:text-lg font-semibold">Locations</div>
        </motion.div>
      </div>
    </div>
  );
};

export default CounterSection;
