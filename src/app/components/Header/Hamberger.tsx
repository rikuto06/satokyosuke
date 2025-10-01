import React from 'react'
import { oswald } from '../../utils/Fonts'

interface HambergerProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function Hamberger({ isOpen, toggle }: HambergerProps) {
  return (
    <>
    
   
    <button type='button' className='flex items-center gap-[10px]' onClick={toggle} aria-label='メニューの開閉ボタン'>
       <p className={`${oswald.className} text-[2.8rem] font-bold leading-normal text-[#F5F5F5] hidden md:block`}>MENU</p>
       <div className='flex flex-col justify-between items-center h-[20px] w-[25px]  '>
        <span className={`block w-full h-[1px] bg-[#f5f5f5] transition-all duration-300 ${isOpen ? ' rotate-45 translate-y-[18px]' : ''}`} />
        <span className={`block w-full h-[1px] bg-[#f5f5f5] transition-all duration-300 ${isOpen ? ' opacity-0' : ''}`} />
        <span className={`block w-full h-[1px] bg-[#f5f5f5] transition-all duration-300 ${isOpen ? ' -rotate-45 translate-y-[0px]' : ''}`} />
        </div>
    </button>
    </>
  )
}
    