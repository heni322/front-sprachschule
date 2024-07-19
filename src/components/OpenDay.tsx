'use client'
import { motion } from 'framer-motion'
import { FaLanguage } from 'react-icons/fa';

const OpenDay = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-8 md:p-16 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
            <div className="md:text-left">
                <h2 className="text-3xl text-blue-500 font-bold mb-2 text-center md:text-left">Open Day</h2>
                <p className="text-lg font-bold mb-4 text-center md:text-left">TRAPPEN ACADEMIE welcomes you to the open day under the motto &quot;WINNING DUO&quot;.</p>
                <p className="text-sm mb-8 text-center md:text-left">Learn a language and sign a contract! TRAPPEN ACADEMIE organizes accelerated language courses:</p>
                <ul className="list-disc pl-8">
                    <li><FaLanguage className="inline-block mr-2" />Arabic</li>
                    <li><FaLanguage className="inline-block mr-2" />French</li>
                    <li><FaLanguage className="inline-block mr-2" />English</li>
                    <li><FaLanguage className="inline-block mr-2" />Italian</li>
                    <li><FaLanguage className="inline-block mr-2" />Spanish</li>
                </ul>
            </div>
            <div className="flex justify-center">
                <motion.video
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    width="100%" 
                    controls // enable video controls
                    controlsList="nodownload" // disable download
                >
                    <source src="/videos/openday.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </motion.video>
            </div>
        </motion.div>
    );
};

export default OpenDay;
