import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-white p-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col justify-center p-10 mr-4">
            <h2 className="text-lg font-bold mb-4 ">Contact Us</h2>
            <address className="not-italic mb-2">
              <p>Avenue Yasser Arafet, Sahloul 1 imm.bouhajeb, 3éme étage 4000 Sousse, Tunisie</p>
              <p>Email: <a href="mailto:info@example.com" className="hover:underline">info@academy-trappen.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:underline">+216 53 538 062</a></p>
            </address>
          </div>
          <div className="flex flex-col justify-center ml-10">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="flex flex-col space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div className="relative -mx-4 mt-10 h-60 lg:h-72">
          <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d808.6494173645561!2d10.593410143188361!3d35.834345756507695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDUwJzAzLjciTiAxMMKwMzUnMzYuMSJF!5e0!3m2!1sen!2stn!4v1718063607567!5m2!1sen!2stn" 
                loading="lazy" 
                className="absolute inset-0 w-full h-full"
                title="Avenue Yasser Arafet, Sahloul 1" 
                aria-label="Avenue Yasser Arafet, Sahloul 1" 
                frameBorder="0"
                allowFullScreen
                // referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <ul className="flex space-x-4">
            <li><a href="https://www.facebook.com/profile.php?id=61560775048767" target="_blank" className="text-white hover:text-gray-400"><FaFacebook size={24} aria-label="Facebook" /></a></li>
            <li><a href="#" className="text-white hover:text-gray-400" target="_blank"><FaTwitter size={24} aria-label="Twitter" /></a></li>
            <li><a href="#" className="text-white hover:text-gray-400" target="_blank"><FaInstagram size={24} aria-label="Instagram" /></a></li>
          </ul>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
