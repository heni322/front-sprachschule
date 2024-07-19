'use client'
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Img01 from '../../../public/images/niveau/a11.png';
import Img12 from '../../../public/images/niveau/a12.png';
import Img21 from '../../../public/images/niveau/a21.png';
import Img22 from '../../../public/images/niveau/a22.png';
import Imgb11 from '../../../public/images/niveau/b11.png';
import Imgb12 from '../../../public/images/niveau/b12.png';
import Imgb21 from '../../../public/images/niveau/b21.png';
import Imgb22 from '../../../public/images/niveau/b22.png';

const Classes = () => {
  const classLevels = [
    { level: 'A1.1', image: Img01 },
    { level: 'A1.2', image: Img12 },
    { level: 'A2.1', image: Img21 },
    { level: 'A2.2', image: Img22 },
    { level: 'B1.1', image: Imgb11 },
    { level: 'B1.2', image: Imgb12 },
    { level: 'B2.1', image: Imgb21 },
    { level: 'B2.2', image: Imgb22 },
  ];

  return (
    <div className="bg-white">
      <Nav />
      <div className="relative h-96 md:h-80">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures.jpg"
            alt="Classes"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          {/* Shadow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold">Our Classes</h1>
        </div>
      </div>
      <div className="container mx-auto bg-white my-8 px-4 md:px-20">
        <motion.h6
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-lg font-semibold mb-2 text-blue-500"
        >
          Classes
        </motion.h6>
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Explore Our German Language Classes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          We offer a comprehensive range of German language classes, from beginner to advanced levels, to help you achieve your language learning goals. Each level is tailored to provide you with the skills and knowledge you need to progress confidently.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classLevels.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={cls.image}
                alt={`${cls.level} Class`}
                className="w-full rounded-md"
                width={400}
                height={200}
                layout="responsive"
              />
              <h3 className="text-2xl font-bold mt-4">German Level {cls.level}</h3>
              {/* <p className="mt-2">Join our German Level {cls.level} class to build on your skills and enhance your proficiency in the German language. This class covers advanced grammar, vocabulary, and conversation practice.</p> */}
            </motion.div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4"
          >
            The path to Germany with Trappen Academie          
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            June Session - Enroll Now!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Professional training in German:
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="list-disc pl-8 mb-6"
          >
            <li>German courses: levels A1 to B2.</li>
            <li>Intensive and extensive courses available.</li>
            <li>Preparation for B1, B2 TELC, ECL, Goethe, ÖSD exams, and more.</li>
            <li>Day and evening classes tailored to your schedule.</li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Timings :
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="list-disc pl-8 mb-6"
          >
            <li>Day classes: Monday to Friday, from 8:30 am to 5:30 pm.</li>
            <li>Evening classes: Monday to Friday, from 5:30 pm to 8:30 pm.</li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Why choose Trappen Academie?
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="list-disc pl-8 mb-6"
          >
            <li>Qualified and experienced teachers.</li>
            <li>Modern and interactive teaching methods.</li>
            <li>Proven results for exam success.</li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          Don&rsquo;t miss this opportunity to master German and open new doors to Germany! Enroll today and start your journey with us.          
        </motion.p>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add testimonials here */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="border rounded-lg p-4 shadow-lg"
            >
              <p className="italic">&quot;Trappen Academie transformed my German learning experience. The classes are well-structured and the teachers are excellent.&quot;</p>
              <h4 className="mt-4 font-bold">- Heni Zeiri</h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="border rounded-lg p-4 shadow-lg"
            >
              <p className="italic">&quot;The German classes at Trappen Academie are interactive and fun. I have learned a lot and feel prepared for my trip to Germany.&quot;</p>
              <h4 className="mt-4 font-bold">- Ines belkheria</h4>
            </motion.div>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Classes;
