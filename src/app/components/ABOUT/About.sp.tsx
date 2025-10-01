'use client'
import React, { useEffect } from 'react'
import { oswald } from '@/app/utils/Fonts';
import Image from 'next/image';


const images = ['/about-bind.jpeg','/about-ciga.jpg','/about-dj.jpeg','/about-drink.jpeg','/about-dtb.jpeg','/about-hat.jpeg','/about-l.jpeg','/about-leopard.jpg','/about-perm.jpeg','/about-profile.jpg','/about-smile.jpg','/about-standing-side.jpeg','/about-standing.jpeg','/about-stayfree.jpeg','/about-sunglass.jpeg','/about-sunshine.jpeg','/about-v.jpg']

export default function Aboutsp() {
  const [index,setIndex] = React.useState(0);

  const handleTap = () => {
     const randomIndex = Math.floor(Math.random() * images.length);
    setIndex(randomIndex);
  };

  return (
    <section className='bg-[#001A00] pt-[49px] px-[5.3%]'>
      <h2 className={`${oswald.className} text-[6.4rem] text-transparent text-[6.5rem] font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] text-center`}>ABOUT<br/>ME</h2>
      <div className='relative h-[251px] mx-[11.2%]' onClick={handleTap}>
    <Image src={images[index]} alt='タップするたびに、順番に様々な理容師佐藤京介の画像が表示されています' fill className='object-cover' />
    </div>
      <p>フェードやクロップを始めたきっかけは「男らしさを<br/>際立たせるため」。施術では肩の力を抜いて過ごせる<br/>よう<span>、</span>居心地を大切にしています。</p>
    </section>
  )
}


