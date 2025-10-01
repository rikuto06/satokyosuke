'use client'
import React, { useEffect } from 'react'
import { oswald } from '../../utils/Fonts'
import Hamberger from './Hamberger'
import Nav from './Nav';

export default function Header() {
  const [isopen,setIsopen] = React.useState(false);
  const Toggle = () => setIsopen(!isopen);

useEffect(()=>{
  const scrollContainer = document.getElementById('scroll-container');
  
  if (!scrollContainer) {
    return;
  }

  if (isopen) {
    scrollContainer.classList.add('no-scroll');
  } else {
    scrollContainer.classList.remove('no-scroll');
  }

  return () => {
    scrollContainer.classList.remove('no-scroll');
  };
}, [isopen]);

  return (
    <header className='flex items-center justify-between px-[5.3%] pb-[80px] mt-[20px]'>
      <h1 className={`${oswald.className} text-[2.8rem] font-bold leading-normal text-[#F5F5F5]`}>
        KYOSUKE SATO
      </h1>
    <Nav isOpen={isopen}/>
    <Hamberger isOpen={isopen} toggle={Toggle}/>
    </header>
  )
}