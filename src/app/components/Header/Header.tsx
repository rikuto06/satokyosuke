'use client'
import React, { useEffect } from 'react'
import { oswald } from '../../utils/Fonts'
import Hamberger from './Hamberger'
import Nav from './Nav';
import { getLenis } from '@/app/utils/SmoothScroll';  
import Link from 'next/link';

export default function Header() {
  const [isopen, setIsopen] = React.useState(false);
  const Toggle = () => setIsopen(!isopen);
  const handleClose =()=> {
    setIsopen(false);
  }

  useEffect(() => {
    const lenis = getLenis();
    
    if (isopen) {
      // ナビゲーション開いたらスクロール停止
      if (lenis) lenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      // ナビゲーション閉じたらスクロール再開
      if (lenis) lenis.start();
      document.body.style.overflow = '';
    }

    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = '';
    };
  }, [isopen]);

  return (
    <header className='flex items-center justify-between px-[5.3%] pb-[80px] mt-[20px]'>
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
