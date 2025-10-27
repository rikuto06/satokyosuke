import { motion } from 'motion/react'
import React, { ReactNode, useRef } from 'react'


interface FvProps {
    children:ReactNode
}

export default function MvAnimation({children}:FvProps) {
    
  return (
    <div className='overflow-x-hidden'>
    <motion.div initial = {{x:200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,ease:'easeInOut'}}  viewport={{once:true}}>{children}</motion.div>
    </div>
  )
}