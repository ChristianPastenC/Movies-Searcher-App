import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { tech } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const FeatureCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className={`${icon === '/src/assets/threejs.svg' && 'bg-white rounded-full p-1'} w-16 h-16 object-contain`}
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        This project is an interactive application built with ReactJS, 
        Framer Motion, Three.js, and Tailwind CSS, designed to provide 
        detailed information about movies using the public RESTful OMDB API. 
        The app offers a visually appealing and seamless experience through 
        smooth animations implemented with Framer Motion, while Three.js 
        elements could add 3D effects. The responsive design is achieved 
        using Tailwind CSS, allowing for a polished presentation.
        <br />
      </motion.p>
      <motion.h3
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
      >
        Some tech features are:
      </motion.h3>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {tech.map((service, index) => (
          <FeatureCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');