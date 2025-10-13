import React from 'react'
import Hamberger from '../components/Header/Hamberger'
import Header from '../components/Header/Header'
import { oswald } from '@/app/utils/Fonts';

export default function WorksPage() {
  
  return (
    <>
    <Header/>
    <h2 className={`${oswald.className} text-[clamp(6.4rem,10vw,22.1rem)] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] md:ml-[5.3%]`}>WORKS</h2>
    </>
  )
}

