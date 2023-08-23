import React from 'react';
import { motion } from 'framer-motion';

import { BucketCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Footer = () => {
  return (
    <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className='h-[550px] w-full'
    >
      <BucketCanvas />
    </motion.div>
  );
};

export default SectionWrapper(Footer, 'contact');