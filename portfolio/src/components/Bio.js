import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import coding from '../assets/img/programmer.gif';

const Bio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when element comes into view
    threshold: 0.5 // Trigger when 50% of the element is visible
  });

  const handleDownload = () => {
    // Replace 'your-cv-url.pdf' with the actual URL of your CV file
    const downloadUrl = 'https://drive.google.com/file/d/1NalcpfD-JANVeJ_724rDO_F8znYKzlF-/view';
    // Triggering the download
    window.open(downloadUrl);
  };

  const [imageX, setImageX] = useState(-100); // Initial position of the image
  const [textX, setTextX] = useState(100); // Initial position of the text

  useEffect(() => {
    if (inView) {
      // Animate image to come in from the left
      setImageX(0);
      // Animate text to come in from the right
      setTextX(0);
    }
  }, [inView]);

  return (
    <div id="about" className="text-center text-white mt-7">
      <h2 className="text-3xl sm:text-4xl">About <span className="text-blue-400">ME</span></h2>
      <div id="about" className="flex flex-col sm:flex-row items-start p-6"> {/* Using flex-col for small devices and flex-row for larger devices */}
        <motion.img
          ref={ref}
          src={coding} alt="Coding"
          initial={{ x: -100 }} // Initial position of the image (off screen to the left)
          animate={{ x: imageX }} // Animate image to come in from the left
          transition={{ duration: 1 }} // Smooth transition duration
          className="max-w-112 md:mt-5 lg:mt-0 xl:mt-0 md:w-96 h-auto mr-4 mb-4 sm:mb-0"
        />
        <motion.div
          ref={ref}
          initial={{ x: 100 }} // Initial position of the text (off screen to the right)
          animate={{ x: textX }} // Animate text to come in from the right
          transition={{ duration: 1 }} // Smooth transition duration
          className="flex-1"
        >
          <p className='text-white text-base sm:text-lg md:text-lg lg:text-2xl xl:text-3xl font-semibold mt-1 sm:mt-0' style={{ fontFamily: 'Arial, sans-serif', padding: '0 0.5rem' }}>
            Seeking a ML, web, or data enthusiast? <span className="text-blue-400">I've got you covered!</span>
          </p>
          <p className='text-white text-sm sm:text-sm md:text-sm lg:text-md xl:text-2xl font-semibold mt-1 mt-3'
            style={{ fontFamily: 'Arial, sans-serif', padding: '0 0.5rem' }}>
            I'm a self-motivated individual studying Computer Science Engineering at Velammal Engineering College in Chennai.
            Passionate about ML, web development, and data analysis, I'm currently exploring the realms of GenAI and MERN stack.
            I'm always eager to delve into new domains and
            technologies. Through various internships, I've gained hands-on experience in these fields,
            completing numerous end-to-end projects.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }} // Scale animation on hover
            whileTap={{ scale: 0.9 }} // Scale animation on tap
            className='bg-white text-blue-500 px-4 py-2 md:px-2 md:py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg mr-2 mb-2 sm:mr-4 sm:mb-0'>
           
            <a href="#contact"> Hire me</a>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }} // Scale animation on hover
            whileTap={{ scale: 0.9 }} 
            onClick={handleDownload}// Scale animation on tap
            className='bg-blue-500 text-white px-4 py-2 md:px-2 md:py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg mb-2 sm:mb-0'>
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Bio;
