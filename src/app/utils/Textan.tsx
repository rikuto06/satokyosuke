import { stagger } from 'motion'
import { motion} from "motion/react"
import React, { Children, ReactNode } from 'react'


interface Props {
  children:ReactNode
}

export default function Textan({children}:Props) {
  const sentenceVariants = {
    hidden:{},
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.1,
        duration:0.5
      }
    }
  }

  const letterVariants = {
    hidden: {
      opacity:0,
    },
    visible: {
      opacity:1,
      transition: {
        staggerChildren:0,
        duration:0.5
      }
    }
  }

  return (
    <motion.span>
      {children}
    </motion.span>
  )
}
