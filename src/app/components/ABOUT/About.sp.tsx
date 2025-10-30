'use client'
import React, { useEffect } from 'react'
import { oswald } from '@/app/utils/Fonts';
import Image from 'next/image';
import Link from 'next/link';


const images = ['/about-bind.jpeg','/about-ciga.jpg','/about-dj.jpeg','/about-drink.jpeg','/about-dtb.jpeg','/about-hat.jpeg','/about-l.jpeg','/about-leopard.jpg','/about-perm.jpeg','/about-profile.jpg','/about-smile.jpg','/about-standing-side.jpeg','/about-standing.jpeg','/about-stayfree.jpeg','/about-sunglass.jpeg','/about-sunshine.jpeg','/about-v.jpg','/about-red.jpg','/about-train.jpg']

export default function Aboutsp() {
  const [index,setIndex] = React.useState(0);

  const handleTap = () => {
     const randomIndex = Math.floor(Math.random() * images.length);
    setIndex(randomIndex);
  };

  return (
    <section className='bg-[#001A00] pt-[49px] px-[5.3%] pb-[49px]'>
      <h2 className={`${oswald.className} rotate-[0.03deg] text-[6.4rem] text-transparent  font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] text-center`}>ABOUT<br/>ME</h2>
      <div className='relative aspect-[252/251] mx-[11.2%] mt-[92px]' onClick={handleTap}>
    <Image src={images[index]} alt='タップするたびに、順番に様々な理容師佐藤京介の画像が表示されています' fill className='object-cover' />
    </div>
      <p className='mt-[17px]'>フェードやクロップを始めたきっかけは<span className='tracking-[-0.35rem]'>「</span>男らしさを<br/>際立たせるため」。施術では肩の力を抜いて過ごせる<br/>よう<span>、</span>居心地を大切にしています。</p>
      <div className={`${oswald.className} mt-[39px]`}>
          <Link href='/about' aria-label='アバウトページへ移動' className='flex items-center gap-[11px] justify-end'>VIEW MORE <span className='relative block h-[16px] w-[16px]'><Image src='/Vector.png' alt='' fill/></span></Link>
      </div>
    </section>
  )
}



