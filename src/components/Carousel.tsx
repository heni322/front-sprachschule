"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
    const slides = [
        {
          url: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Beautiful Sunset',
          description: 'Enjoy the mesmerizing beauty of a sunset over the mountains.',
          buttonLabel: 'Learn More',
          buttonLink: '#',
        },
        {
          url: 'https://images.pexels.com/photos/547494/pexels-photo-547494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'Exploring Nature',
          description: 'Embark on an adventure and explore the wonders of nature.',
          buttonLabel: 'Discover',
          buttonLink: '#',
        },
        {
          url: 'https://images.pexels.com/photos/2871654/pexels-photo-2871654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'Urban Exploration',
          description: 'Discover the vibrant energy of city life and urban landscapes.',
          buttonLabel: 'Explore',
          buttonLink: '#',
        },
        {
          url: 'https://images.pexels.com/photos/756688/pexels-photo-756688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Relaxation Time',
          description: 'Indulge in peaceful moments and relax by the tranquil waters.',
          buttonLabel: 'Relax',
          buttonLink: '#',
        },
        {
          url: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Adventure Awaits',
          description: 'Embark on a thrilling adventure and discover new horizons.',
          buttonLabel: 'Start Journey',
          buttonLink: '#',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
      };
    
      return (
        <div className='max-w h-[780px] w-full m-auto relative group'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full h-full bg-center bg-cover duration-500 absolute top-0 left-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${slide.url})`, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg text-center mb-6">{slide.description}</p>
                  <a href={slide.buttonLink} className="bg-white text-black py-2 px-4 rounded-lg font-semibold transition duration-300 hover:bg-black hover:text-white">{slide.buttonLabel}</a>
                </div>
              )}
            </div>
          ))}
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer shadow-lg'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer shadow-lg'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer shadow-md'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      );
};

export default Carousel;
