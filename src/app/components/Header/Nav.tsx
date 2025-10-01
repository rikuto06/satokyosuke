import Link from 'next/link'
import React from 'react'

interface NavProps {
  isOpen: boolean;
}

export default function Nav({ isOpen }: NavProps) {
  return (
    <>
    <nav className={`fixed top-0 left-0 w-full h-screen bg-[#0D0D0D] ${isOpen ? 'translate-y-0 duration-300' : '-translate-y-full duration-300'}`}>
        <ul className='flex flex-col justify-center items-center h-full gap-[40px] text-[1.6rem] font-medium leading-normal text-[#F5F5F5]'> 
            <li><Link href='#concept' aria-label='CONCEPTセクションへ移動'>CONCEPT</Link></li>
            <li><Link href='' aria-label='ABOUTMEページへ移動'>ABOUT ME</Link></li>
            <li><Link href='' aria-label='WORKSページへ移動'>WORKS</Link></li>
            <li><Link href='#MENU' aria-label='MENUセクションへ移動'>MENU</Link></li>
            <li><Link href='#contact' aria-label='CONTACTセクションへ移動'>CONTACT</Link></li>
            <li><Link href='#access' aria-label='ACCESSセクションへ移動'>ACCESS</Link></li>
        </ul>
    </nav>
    <Link href='https://www.instagram.com/ky0_1?utm_source=ig_web_button_share_sheet&igsh=NmZrMnE4ZTR4NDJ3' aria-label='インスタグラムアカウントページへ移動' target='_blank' rel='noopener noreferrer'><img src="" alt="インスタグラムのアイコン画像" /></Link>
    </>
  )
}

