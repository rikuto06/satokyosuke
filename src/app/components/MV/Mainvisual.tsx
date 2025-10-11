import Image from 'next/image'
import React from 'react'
import { oswald } from '@/app/utils/Fonts';
import Mainimg from './Mainimg';
import ScrollFade from '@/app/utils/ScrollFade';

export default function 
() {
  return (
    <section className='relative -z-1'>
      <ScrollFade>
    <p className={`${oswald.className} absolute -top-[3.5rem] left-[5.3%] text-transparent text-[6.5rem] font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5]
    md:text-[18rem] md:-top-[2.5rem]
    `}>TO ALL</p>
    <p className={`${oswald.className} absolute top-[4.3rem] left-[5.3%] text-transparent text-[6.5rem] font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5]
    md:text-[18rem] md:top-[19.3rem]
    `}>BOYS</p></ScrollFade>
    <h2 className='[writing-mode:vertical-rl] absolute top-[8.5rem] right-[12%] text-[2.5rem]
    md:text-[5.2rem] md:top-[9.5rem] md:tracking-[1.11rem] md:whitespace-nowrap
    '>男の覚悟を刻み込もう。</h2>
    <div className='h-[70rem] relative -z-10
    md:h-[702px] md:w-[84.65%] ml-auto
    '>
        <Mainimg/>
    </div>
    </section>
  )
}


