'use client'
import React from 'react'
import Hamberger from '../components/Header/Hamberger'
import Header from '../components/Header/Header'
import { oswald } from '@/app/utils/Fonts';
import Link from 'next/link';
import Image from 'next/image';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import WorksCard from './WorksCard';

export default function WorksPage() {
  
  return (
    <>
    <Header/>
    <section>
      <ol className={`${oswald.className} flex font-light ml-[13%] text-[1.2rem] gap-[16px] items-center`}>
      <li><Link href='/#' aria-label='トップページへ移動' className='underline underline-offset-3 hover:no-underline duration-200'>TOP</Link></li>
      <li className='flex gap-[16px]  items-center'><span className='relative inline-block w-[0.7rem] h-[0.7rem]'><Image src='/Vector.png' alt='' fill/></span>WORKS</li>
    </ol>
        <h2 className={`${oswald.className} text-[clamp(6.4rem,10vw,22.1rem)] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] mx-[13%] mt-[49px] text-center
        md:text-right 
        `}>WORKS</h2>
        <div className='grid grid-cols-2 gap-x-[1.78%] gap-y-[20px] mt-[49px] px-[5.3%]'>
          <WorksCard imgsrc='/hair-crop.jpeg' hairex='CUT' />
          <WorksCard imgsrc='/hair-crop-ro.jpg' hairex='CUT' />
          <WorksCard imgsrc='/hair-fade.jpg' hairex='CUT' />
          <WorksCard imgsrc='/hair-gold-easyperm.jpeg' hairex='CUT' />
        </div>
          
    </section>
    <Contact/>
    <Footer/>
    </>
  )
}







