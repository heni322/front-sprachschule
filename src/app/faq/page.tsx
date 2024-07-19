import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const FAQ = () => {
  const faqs = [
    {
      question: 'What languages do you offer?',
      answer: 'We offer courses in German, French, Spanish, Italian, and English.',
    },
    {
      question: 'How do I enroll in a course?',
      answer: 'You can enroll in a course by visiting our website and filling out the registration form.',
    },
    {
      question: 'Are the classes conducted online or in person?',
      answer: 'Currently, all our classes are conducted online. We may offer in-person classes in the future.',
    },
    {
      question: 'What are the class timings?',
      answer: 'Class timings vary based on the course and level. You can find the schedule on our website.',
    },
    {
      question: 'Do you provide study materials?',
      answer: 'Yes, we provide study materials and resources to our students to aid their learning.',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="min-h-screen">
      <Nav />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1>
        <div className="max-w-lg mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <div className="font-bold mb-2 text-lg">{faq.question}</div>
              <div>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
