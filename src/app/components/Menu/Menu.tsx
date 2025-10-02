'use client'
import React from 'react'
import { oswald } from '@/app/utils/Fonts';
import Image from 'next/image';
import MenuImage from './MenuImage';


export default function Menu() {
 

  return (
    <section className='px-[5.3%] mt-[49px]'>
      <h2 className={`${oswald.className} text-[6.4rem] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5]`}>MENU</h2>
      <div className='relative h-[185px] w-full mt-[127px]'>
        <MenuImage/>
      </div>
    <div className='flex items-center justify-between mt-[55px] ml-[10.1%]'>
      <div>
      <h3 className={`${oswald.className} text-[1.8rem] font-bold`}>CUT</h3>
      <p>カット</p>
      </div>
      <p>新規7700円<br/>二回目以降6600円</p>
    </div>
    <div className='flex items-center justify-between mt-[53px] ml-[10.1%]'>
      <div>
      <h3 className={`${oswald.className} text-[1.8rem] font-bold`}>COLOR</h3>
      <p>カラー</p>
      </div>
      <p>カット料金+6000円</p>
    </div>
    <div className='flex items-center justify-between mt-[53px] ml-[10.1%]'>
      <div>
      <h3 className={`${oswald.className} text-[1.8rem] font-bold`}>PERM</h3>
      <p>パーマ</p>
      </div>
      <p>カット料金+6000円</p>
    </div>
    </section>
  )
}

