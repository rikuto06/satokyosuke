import { oswald } from '@/app/utils/Fonts'
import Image from 'next/image'
import React from 'react'

export default function Mv() {
  return (
    <section className='px-[4.2%] md:flex flex-row-reverse md:gap-x-[1.8%] md:px-[5.3%] items-end'>
        <div className='flex-1'>
        <h2 className='text-[2.1rem] md:text-[2.4rem] md:ml-[50%]'>男の覚悟を<br/>刻み込もう</h2>
        <p className={`${oswald.className} text-[4.2rem] font-bold text-transparent [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] mt-[47px]
        md:mt-[84px]
        `}>TO ALL BOYS</p>
        <div className='relative  aspect-[678/390] hidden md:block animate-reveal'>
        <Image src='/wash.png' alt='理容師佐藤京介が男性客の髪を洗っている様子の画像' fill/>
        </div>
        </div>
        <div className='relative aspect-[344/432]
         md:aspect-[680/688] flex-1 animate-reveal
        '>
        <Image src='/mv.png' alt='理容師佐藤京介が男性客の髪を切っている様子の画像' fill/>
        </div>
    </section>
  )
}

