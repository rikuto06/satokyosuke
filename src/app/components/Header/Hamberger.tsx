import React from 'react'
import { oswald } from '../../utils/Fonts'

interface HambergerProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function Hamberger({ isOpen, toggle }: HambergerProps) {
  return (
    <>
    <button type='button' className='flex items-center gap-[10px] z-[101] cursor-pointer hover:opacity-70' onClick={toggle} aria-label='メニューの開閉ボタン'>
        <div className='flex flex-col justify-between items-center h-[20px] w-[25px] 2xl:h-[30px] 2xl:w-[35px]'>
        <span className={`block w-full h-[1px] bg-[#f5f5f5] transition-all duration-300 ${isOpen ? ' rotate-45 translate-y-[18px] 2xl:translate-y-[28px]' : ''}`} />
        <span className={`block w-full h-[1px] bg-[#f5f5f5] transition-all duration-300 ${isOpen ? ' opacity-0' : ''}`} />
        <span className={`block w-full h-[1px] bg-[#f5f5f5] transition-all duration-300 ${isOpen ? ' -rotate-45 translate-y-[0px]' : ''}`} />
        </div>
    </button>
    </>
  )
}