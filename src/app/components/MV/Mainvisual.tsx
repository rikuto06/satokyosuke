import Image from 'next/image'
import React from 'react'
import { oswald } from '@/app/utils/Fonts';

export default function 
() {
  return (
    <section className='relative -z-1'>
    <p className={`${oswald.className} absolute -top-[3.5rem] left-[5.3%] text-transparent text-[6.5rem] font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5]`}>TO ALL</p><p className={`${oswald.className} absolute top-[4.3rem] left-[5.3%] text-transparent text-[6.5rem] font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5]`}>BOYS</p>
    <h2 className='[writing-mode:vertical-rl] absolute top-[8.5rem] right-[12%] text-[2.5rem]'>男の覚悟を刻み込もう。</h2>
    <div className='h-[70rem] relative -z-10
    md:h-[702px] md:w-[84.65%] ml-auto
    '>
        <Image src='/mv.png' alt='理容師佐藤京介が、男性の髪をバリカンで刈り上げている画像' fill className='object-cover'/>
    </div>
    </section>
  )
}
