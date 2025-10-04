'use client'
import React, { useEffect } from 'react'
import Aboutpc from './About.pc';
import Aboutsp from './About.sp';

export default function About() {
    const [isMounted,setIsMounted] = React.useState(false);
    const [isPc,setIsPc] = React.useState(false);

    useEffect(()=>{
        setIsMounted(true);
            const checkWidth = () => {
                setIsPc (window.innerWidth>= 768)
            }
        

        checkWidth()
        window.addEventListener('resize',checkWidth)
        return ()=> window.removeEventListener('resize',checkWidth)
    },[])

    if (!isMounted) {
        return null;
    }

  return isPc ? <Aboutpc/> : <Aboutsp/>
}


