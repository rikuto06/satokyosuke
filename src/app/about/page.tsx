import React from 'react'
import Header from '../components/Header/Header'
import { oswald } from '@/app/utils/Fonts';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main>
    <Header/>
    <h2 className={`${oswald.className} text-[clamp(6.4rem,10vw,22.1rem)] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] ml-[13.86%]`}>ABOUT ME</h2>
    <div className='relative h-[378px] w-[74.6%] ml-[13.86%]'>
        <Image src='/aboutimg.jpeg' alt='理容師佐藤恭介がこちらをみている画像' fill className='absolute'/>
    </div>
    </main>
  )
}

