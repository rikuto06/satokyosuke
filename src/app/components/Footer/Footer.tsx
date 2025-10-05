import Link from 'next/link'
import React from 'react'
import { oswald } from '../../utils/Fonts'

export default function Footer() {
  return (
    <footer className='mt-[49px] mb-[12px] px-[5.3%] md:px-0'>
      <nav>
     <ul className={`${oswald.className} grid grid-cols-2 text-[1.4rem] font-bold leading-normal text-[#F5F5F5]`}>
            <li><Link href='#concept' aria-label='CONCEPTセクションへ移動' className=''>CONCEPT</Link></li>
            <li><Link href='' aria-label='ABOUTMEページへ移動'>ABOUT ME</Link></li>
            <li><Link href='' aria-label='WORKSページへ移動'>WORKS</Link></li>
            <li><Link href='#MENU' aria-label='MENUセクションへ移動'>MENU</Link></li>
            <li><Link href='#contact' aria-label='CONTACTセクションへ移動'>CONTACT</Link></li>
            <li><Link href='#access' aria-label='ACCESSセクションへ移動'>ACCESS</Link></li>
        </ul>
      </nav>
      <div className={`${oswald.className} mt-[18px] text-[5.7rem] font-bold whitespace-nowrap leading-[100%] text-transparent [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] md:text-[23.3rem] md:px-[1.1%]`}>KYOSUKE SATO</div>

    </footer>
  )
}


