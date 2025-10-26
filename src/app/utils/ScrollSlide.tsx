import { useScroll, useTransform } from 'motion/react'
import React, { ReactNode, useRef } from 'react'
import { motion } from 'motion/react'

interface SlideProps {
    children:ReactNode
}

export default function ScrollSlide({children}:SlideProps) {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end", "end start"],
    });
    const x = useTransform(scrollYProgress,[0,0.5],[200,0]);
    const opacity = useTransform(scrollYProgress,[0,0.2],[0,1]);
  return (
    <div className='overflow-x-hidden'>
    <motion.div style={{x,opacity}} ref={ref} className='overflow-x-hidden'>
        {children}
    </motion.div>
  </div>
  )
}
