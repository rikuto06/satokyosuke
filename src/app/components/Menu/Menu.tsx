'use client'
import React from 'react'
import { oswald } from '@/app/utils/Fonts';
import Image from 'next/image';
import MenuImage from './MenuImage';
import ScrollFade from '@/app/utils/ScrollFade';
import ScrollSlide from '@/app/utils/ScrollSlide';


export default function Menu() {
 

  return (
    <section className='px-[5.3%] mt-[49px] pb-[49px] md:px-0 md:mt-[100px] md:pb-[200px]' id='menu'>
      <ScrollFade>
      <h2 className={`${oswald.className} text-[clamp(6.4rem,10vw,22.1rem)] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] md:ml-[5.3%]`}>MENU</h2>
      </ScrollFade>

    <ScrollSlide>
      <div className='md:flex md:flex-row-reverse md:px-[15.5%] md:justify-between md:items-center md:mt-[100px] md:gap-[21%]'>


      <div className='relative aspect-[331/185] mt-[127px] md:mt-0 md:aspect-[325/251] md:h-[251px]'>
        <Image src='/menuimage-sp.png' alt='理容師佐藤京介が男性客の髪を切っている写真' fill />
      </div>

<div className='md:flex md:flex-col flex-1'>

    <div className='flex items-center justify-between mt-[55px] ml-[10.1%] md:mt-0 md:ml-0'>
      <div>
      <h3 className={`${oswald.className} text-[1.8rem] font-bold md:text-[3.1rem] 2xl:text-[5rem]`}>CUT</h3>
      <p className='md:text-[1.6rem] 2xl:text-[2.3rem]'>カット</p>
      </div>
      <p className='md:text-[1.6rem] 2xl:text-[3rem]'>新規7700円<br/>二回目以降6600円</p>
    </div>

    <div className='flex items-center justify-between mt-[53px] ml-[10.1%] md:mt-[48px] md:ml-0'>
      <div>
      <h3 className={`${oswald.className} text-[1.8rem] font-bold md:text-[3.1rem] 2xl:text-[5rem]`}>COLOR</h3>
      <p className='md:text-[1.6rem] 2xl:text-[2.3rem]'>カラー</p>
      </div>
      <p className='md:text-[1.6rem] 2xl:text-[3rem]'>カット料金+6000円</p>
    </div>
    <div className='flex items-center justify-between mt-[53px] ml-[10.1%] md:mt-[48px] md:ml-0'>
      <div>
      <h3 className={`${oswald.className} text-[1.8rem] font-bold md:text-[3.1rem] 2xl:text-[5rem]`}>PERM</h3>
      <p className='text-[1.6rem] 2xl:text-[2.3rem]'>パーマ</p>
      </div>
      <p className='md:text-[1.6rem] 2xl:text-[3rem]'>カット料金+6000円</p>
    </div>

  </div>


    </div>
    </ScrollSlide>
    </section>
    
  )
}