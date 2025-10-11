'use client'
import Image from "next/image";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import _SplitText from "gsap/SplitText";
import { ReactNode, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(_SplitText,ScrollTrigger);

type ScrollFadeProps = {
  children : ReactNode;
  start?: string;
}

export default function ScrollFade({children, start = 'top 70%'}: ScrollFadeProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if (textRef.current) {
      const split = new SplitText(textRef.current,{type:'chars'});

      gsap.from(split.chars,{
      scrollTrigger: {
        trigger : textRef.current,
        start : start ,
        toggleActions : 'play none none none',
      },
      duration: 0.1, 
      y: 20, 
      autoAlpha: 0, 
      stagger: 0.05
      },);

    }
  },[])
  return (
   
    <div ref={textRef} >{children}</div>
    );
}
