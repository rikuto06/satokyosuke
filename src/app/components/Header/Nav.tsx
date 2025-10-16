import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { oswald } from '../../utils/Fonts'

interface NavProps {
  isOpen: boolean;
}

export default function Nav({ isOpen }: NavProps) {
  return (
    <>
    <nav className={`px-[5.3%] fixed top-0 left-0 w-full h-screen bg-[#0D0D0D] ${isOpen ? 'translate-y-0 duration-300' : '-translate-y-full duration-300'} z-100 `}>
        <ul className={`${oswald.className} flex flex-col text-[5rem] font-bold leading-normal text-[#F5F5F5] mt-[193px]`}>
            <li><Link href='#concept' aria-label='CONCEPTセクションへ移動' className=''>CONCEPT</Link></li>
            <li><Link href='/about' aria-label='アバウトページへ移動'>ABOUT ME</Link></li>
            <li><Link href='/works' aria-label='ワークスページへ移動'>WORKS</Link></li>
            <li><Link href='#MENU' aria-label='メニューセクションへ移動'>MENU</Link></li>
            <li><Link href='#contact' aria-label='コンタクトセクションへ移動'>CONTACT</Link></li>
            <li><Link href='#access' aria-label='アクセスセクションへ移動'>ACCESS</Link></li>
        </ul>
         <Link href='https://www.instagram.com/ky0_1?utm_source=ig_web_button_share_sheet&igsh=NmZrMnE4ZTR4NDJ3' aria-label='インスタグラムアカウントページへ移動' target='_blank' rel='noopener noreferrer' className='fixed bottom-10 right-[5.3%]'><Image src='/instagramicon.svg' alt='インスタグラムのアイコン画像' width={24} height={24}  /></Link>
    </nav>
    </>
  )
}

