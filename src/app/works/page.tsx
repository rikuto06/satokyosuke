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
    <section className='md:pb-[100px]'>
      <ol className={`${oswald.className} flex font-light ml-[13%] text-[1.2rem] gap-[16px] items-center`}>
      <li><Link href='/#' aria-label='トップページへ移動' className='underline underline-offset-3 hover:no-underline duration-200'>TOP</Link></li>
      <li className='flex gap-[16px]  items-center'><span className='relative inline-block w-[0.7rem] h-[0.7rem]'><Image src='/Vector.png' alt='' fill/></span>WORKS</li>
    </ol>
        <h2 className={`${oswald.className} text-[clamp(6.4rem,10vw,22.1rem)] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] mx-[13%] mt-[49px] text-center
        md:text-right 
        `}>WORKS</h2>
        <div className='grid grid-cols-2 gap-x-[1.78%] gap-y-[20px] mt-[49px] px-[5.3%]
        md:grid-cols-3 md:gap-y-[74px] md:px-[9.02%] md:gap-x-[7.79%]
        '>
          <WorksCard imgsrc='/hair-crop.jpeg' hairex='CUT' />
          <WorksCard imgsrc='/hair-crop-ro.jpg' hairex='CUT' />
          <WorksCard imgsrc='/hair-fade.jpg' hairex='CUT' />
          <WorksCard imgsrc='/hair-gold-easyperm.jpeg' hairex='CUT&COLOR' />
          <WorksCard imgsrc='/hair-gold.jpeg' hairex='CUT&COLOR' />
          <WorksCard imgsrc='/hair-line.jpeg' hairex='CUT&COLOR&PERM' />
          <WorksCard imgsrc='/hair-perm-dread.jpg' hairex='CUT&PERM' />
          <WorksCard imgsrc='/hair-perm.jpeg' hairex='CUT&PERM' />
          <WorksCard imgsrc='/hair-pink.jpeg' hairex='CUT&COLOR' />
          <WorksCard imgsrc='/hair-sunglassgold.jpeg' hairex='CUT&COLOR' />
          <WorksCard imgsrc='/haircrop-shaved.jpg' hairex='CUT&COLOR' />
          <WorksCard imgsrc='/hairek.jpeg' hairex='CUT' />
          <WorksCard imgsrc='/hair-orange.jpeg' hairex='CUT&COLOR' />
          <WorksCard imgsrc='/hair-reverse.jpeg' hairex='CUT' />
          <WorksCard imgsrc='/hair-medium.jpeg' hairex='CUT' />
          <WorksCard imgsrc='/hair-bl.jpg' hairex='CUT&PERM' />
          <WorksCard imgsrc='/hair-tkms.JPG' hairex='CUT' />
          <WorksCard imgsrc='/hair-gld.jpg' hairex='CUT&COLOR&PERM' />
          <WorksCard imgsrc='/hair-brwn.jpeg' hairex='CUT&COLOR' />
          <WorksCard imgsrc='/hair-gldyg.jpeg' hairex='CUT&COLOR&PERM' />
          <WorksCard imgsrc='/hair-prmct.jpeg' hairex='CUT&PERM' />
        </div>
          
    </section>
    <Contact/>
    <Footer/>
    </>
  )
}







