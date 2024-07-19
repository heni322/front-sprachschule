import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaLanguage, FaGraduationCap } from 'react-icons/fa';

const Teachers = () => {
  const teachers = [
    {
      name: 'Anna Müller',
      imageUrl: '/images/teacher1.jpg',
      description: 'Anna is a certified German language teacher with over 10 years of experience. She specializes in teaching beginner to advanced levels and has a passion for helping students achieve their language learning goals. Anna believes in creating a supportive and interactive classroom environment where students feel encouraged to participate and grow.',
      languages: ['German', 'English'],
      expertise: ['Grammar', 'Conversation', 'Cultural Studies'],
    },
    {
      name: 'Max Schmidt',
      imageUrl: '/images/teacher2.jpg',
      description: 'Max is an experienced language instructor who holds a master\'s degree in Linguistics. He is dedicated to providing engaging and interactive lessons to his students, fostering a supportive learning environment. Max is known for his creative teaching methods, incorporating multimedia resources and real-world examples to make learning enjoyable and effective.',
      languages: ['German', 'Spanish'],
      expertise: ['Speaking Skills', 'Literature', 'Exam Preparation'],
    },
    {
      name: 'Sophie Wagner',
      imageUrl: '/images/teacher3.jpg',
      description: 'Sophie is a native German speaker with a background in education and language teaching. She brings enthusiasm and energy to her classes, creating dynamic lessons that cater to diverse learning styles. Sophie is committed to helping students build confidence in their language skills and reach their full potential.',
      languages: ['German', 'French'],
      expertise: ['Vocabulary Building', 'Writing Skills', 'Pronunciation'],
    },
    {
      name: 'Markus Keller',
      imageUrl: '/images/teacher4.jpg',
      description: 'Markus is a highly experienced language educator with a passion for teaching German. He believes in the importance of cultural immersion in language learning and often incorporates cultural activities and discussions into his lessons. Markus is patient, understanding, and committed to supporting his students on their language learning journey.',
      languages: ['German', 'Italian'],
      expertise: ['Listening Comprehension', 'Intercultural Communication', 'Business German'],
    },
    // Add more teachers as needed
  ];

  return (
    <div className="min-h-screen">
      <Nav />
      <div className="container mx-auto p-8 ">
        <h1 className="text-4xl font-bold text-center mb-8">Meet Our Teachers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 sm:h-72 md:h-80">
                <Image src={teacher.imageUrl} alt={teacher.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{teacher.name}</h2>
                <p className="text-gray-600 mb-4">{teacher.description}</p>
                <div className="flex justify-between text-sm">
                  {/* <div className="flex items-center">
                    <FaLanguage className="mr-1" />
                    <div>Languages:</div>
                    <ul className="ml-2">
                      {teacher.languages.map((language, index) => (
                        <li key={index}>{language}</li>
                      ))}
                    </ul>
                  </div> */}
                  {/* <div className="flex items-center">
                    <FaGraduationCap className="mr-1" />
                    <div>Expertise:</div>
                    <ul className="ml-2">
                      {teacher.expertise.map((expertise, index) => (
                        <li key={index}>{expertise}</li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Teachers;
