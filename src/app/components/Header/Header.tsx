'use client'
import React, { useEffect } from 'react'
import { oswald } from '../../utils/Fonts'
import Hamberger from './Hamberger'
import Nav from './Nav';
import Link from 'next/link';

export default function Header() {
  const [isopen, setIsopen] = React.useState(false);
  const Toggle = () => setIsopen(!isopen);
  const handleClose =()=> {
    setIsopen(false);
  }

  
  return (
    <header className='flex items-center justify-between px-[5.3%] pb-[41px] mt-[20px] md:px-[1.8%]'>
      <h1 className={`${oswald.className} text-[2.8rem] font-bold leading-normal text-[#F5F5F5] 2xl:text-[5rem] z-999`}>
        <Link href='/#' aria-label='トップページへ移動' className='hover:opacity-70'>
        KYOSUKE SATO
      </Link>
      </h1>
      <Nav isOpen={isopen} onClose={handleClose}/>
      <Hamberger isOpen={isopen} toggle={Toggle}/>
    </header>
  )
}
