import React from 'react';
import { motion } from 'framer-motion';

export default function FadeIn(props) {
 const { children } = props;
 const fadeInText = {
  initial: { opacity: 0 },
  animate: {
   opacity: 1,
   transition: {
    duration: 4,
    delayChildren: 2.5,
   },
  },
 };
 return (
  <motion.div
   {...fadeInText}
   viewport={{ amount: 0.4 }}
   className={props.class}
  >
   {children}
  </motion.div>
 );
}
