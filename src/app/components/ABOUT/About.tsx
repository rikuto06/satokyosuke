import React from 'react'
import { oswald } from '@/app/utils/Fonts';

export default function About() {
  return (
    <section className='bg-[#001A00] pt-[49px]'>
      <h2 className={`${oswald.className} text-[6.4rem] text-transparent text-[6.5rem] font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] text-center`}>ABOUT<br/>ME</h2>
      <p>フェードやクロップを始めたきっかけは「男らしさを<br/>際立たせるため」。施術では肩の力を抜いて過ごせる<br/>よう<span>、</span>居心地を大切にしています。</p>
    </section>
  )
}
