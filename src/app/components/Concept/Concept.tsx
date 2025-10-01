import Image from 'next/image'
import React from 'react'
export default function Concept() {
  return (
   <section className='mt-[49px]'>
    <h2 className='headsp'>CONCEPT</h2>
    <h3 className='text-[2.4rem] font-medium leading-[43px] mt-[47px] ml-[5.3%] '>若者に刺さる<br/>男前スタイルの拠点</h3>
    <div className='flex mt-[49px] ml-[5.3%] mr-[6.93%]'>
      <h4 className='[writing-mode:vertical-rl]'>KYOSUKE SATO</h4>
      <div className='relative h-[25.5rem] w-[82.6%] flex-1'>
      <Image src='/concept.png' alt='理容師佐藤京介が、こちらを見ている写真' fill/>
      </div>
    </div>
    <p className='ml-[12%] text-[1.6rem] leading-[2.9rem]'>来るだけで<span className='tracking-[-0.304rem]'>、</span>気分も髪もスッキリ。<br/>話しながら<span className='tracking-[-0.368rem]'>、</span>君に合うスタイルを作ります。</p>
   </section>
  )
}

