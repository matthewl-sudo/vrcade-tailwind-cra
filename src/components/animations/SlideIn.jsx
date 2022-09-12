import React from 'react';
import { motion } from 'framer-motion';

export default function SlideIn(props) {
 //  console.log(props);
 const { children } = props;
 const slideInText = {
  offscreen: {
   opacity: 0,
   x: -50,
  },
  onscreen: {
   x: 0,
   opacity: 1,
   transition: {
    type: 'spring',
    bounce: 0.6,
    duration: 4.8,
   },
  },
 };

 return (
  <motion.div
   variants={slideInText}
   initial="offscreen"
   whileInView="onscreen"
   viewport={{ once: true, amount: 0.4 }}
   className={props.class}
  >
   {children}
  </motion.div>
 );
}
