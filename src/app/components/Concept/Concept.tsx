import Image from 'next/image'
import React from 'react'
export default function Concept() {
  return (
   <section className='mt-[49px] pl-[5.3%] pr-[6.93%]'>
    <h2 className='headsp'>CONCEPT</h2>
    <h3 className='text-[2.4rem] font-medium leading-[43px] mt-[47px]'>若者に刺さる<br/>男前スタイルの拠点</h3>
    <div className='flex mt-[49px]'>
      <h4 className='[writing-mode:vertical-rl]'>KYOSUKE SATO</h4>
      <div className='relative h-[25.5rem] w-[82.6%] flex-1'>
      <Image src='/concept.png' alt='理容師佐藤京介が、こちらを見ている写真' fill/>
      </div>
    </div>
    <p className='mt-[5px] ml-[8%] text-[1.6rem] leading-[2.9rem] whitespace-nowrap'>来るだけで<span className='tracking-[-0.304rem]'>、</span>気分も髪もスッキリ。<br/>話しながら<span className='tracking-[-0.368rem]'>、</span>君に合うスタイルを作ります。</p>
    <p className='mt-[6px] ml-[8%] whitespace-nowrap'>変わるのは髪型だけじゃない<span className='tracking-[-0.35rem]'>。</span>鏡を見るたびに、<br className='md:hidden'/>昨日よりも少し自信が芽生える。新しい自分に<br className='md:hidden'/>出会う<span className='tracking-[-0.35rem]'>、</span>その瞬間を楽しんでください。フェード<br className='md:hidden'/>でもクロップでも<span className='tracking-[-0.35rem]'>、</span>ちょっとの勇気で毎日が変わ<br className='md:hidden\'/>る<span className='tracking-[-0.35rem]'>。</span>その一歩を軽く踏み出せば<span className='tracking-[-0.35rem]'>、</span>そこから後は任<br className='md:hidden'/>せてください<span className='tracking-[-0.35rem]'>。</span>インスタグラムにてご予約承って<br className='md:hidden'/>おります<span className='tracking-[-0.35rem]'>。</span>あなたの来店を<span className='tracking-[-0.35rem]'>、</span>心よりお待ちしてい<br className='md:hidden'/>ます。</p>
   </section>
  )
}

