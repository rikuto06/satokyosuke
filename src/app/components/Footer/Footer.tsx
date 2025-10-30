import Link from 'next/link'
import React from 'react'
import { oswald } from '../../utils/Fonts'

export default function Footer() {
  return (
    <footer className='mt-[49px] mb-[12px] px-[5.3%] md:px-0'>
      <nav className='md:flex md:justify-end'>
    <ul className={`${oswald.className} grid grid-cols-2 text-[1.4rem] font-bold leading-normal text-[#F5F5F5]
    md:text-[2rem] md:grid-cols-[14.24%_14.24%] md:gap-x-30 2xl:text-[4rem] 2xl:gap-x-50
    `}>
            <li><Link href='/#concept' aria-label='コンセプトセクションへ移動' className='hover:opacity-70'>CONCEPT</Link></li>
            <li><Link href='/about' aria-label='アバウトミーページへ移動' className='whitespace-nowrap hover:opacity-70'>ABOUT ME</Link></li>
            <li><Link href='/works' aria-label='ワークスページへ移動' className='hover:opacity-70'>WORKS</Link></li>
            <li><Link href='/#menu' aria-label='メニューセクションへ移動' className='hover:opacity-70'>MENU</Link></li>
            <li><Link href='/#contact' aria-label='コンタクトセクションへ移動' className='hover:opacity-70'>CONTACT</Link></li>
            <li><Link href='/#access' aria-label='アクセスセクションへ移動' className='hover:opacity-70'>ACCESS</Link></li>
        </ul>
      </nav>
      <div className={`${oswald.className} text-outline-custom text-[15vw] md:text-[16.18vw] mt-[50px] font-bold whitespace-nowrap leading-[100%] text-transparent [-webkit-text-stroke-width:1px]  md:px-[1.1%]`}>KYOSUKE SATO</div>
      <small className=' rotate-[0.03deg] block text-[1rem] text-right mr-[1.1%] mt-[15px]'>&copy;KYOSUKESATO2025</small>
    </footer>
  )
}


