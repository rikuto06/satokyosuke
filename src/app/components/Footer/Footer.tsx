import Link from 'next/link'
import React from 'react'
import { oswald } from '../../utils/Fonts'

export default function Footer() {
  return (
    <footer className='mt-[49px] mb-[12px] px-[5.3%] md:px-0'>
      <nav className='md:flex md:justify-end'>
    <ul className={`${oswald.className} grid grid-cols-2 text-[1.4rem] font-bold leading-normal text-[#F5F5F5]
    md:text-[2rem] md:grid-cols-[14.24%_14.24%] md:gap-x-30
    `}>
            <li><Link href='#concept' aria-label='CONCEPTセクションへ移動' className='hover:opacity-70'>CONCEPT</Link></li>
            <li><Link href='/about' aria-label='ABOUTMEページへ移動' className='whitespace-nowrap hover:opacity-70'>ABOUT ME</Link></li>
            <li><Link href='/works' aria-label='WORKSページへ移動' className='hover:opacity-70'>WORKS</Link></li>
            <li><Link href='#menu' aria-label='MENUセクションへ移動' className='hover:opacity-70'>MENU</Link></li>
            <li><Link href='#contact' aria-label='CONTACTセクションへ移動' className='hover:opacity-70'>CONTACT</Link></li>
            <li><Link href='#access' aria-label='ACCESSセクションへ移動' className='hover:opacity-70'>ACCESS</Link></li>
        </ul>
      </nav>
      <div className={`${oswald.className} text-[clamp(5.7rem,16.2vw,23.3rem)] mt-[50px] font-bold whitespace-nowrap leading-[100%] text-transparent [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] md:px-[1.1%]`}>KYOSUKE SATO</div>

    </footer>
  )
}


