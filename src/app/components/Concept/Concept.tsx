import { oswald } from '@/app/utils/Fonts'
import ScrollFade from '@/app/utils/ScrollFade'
import Image from 'next/image'
import React from 'react'
export default function Concept() {
  return (
   <section className='mt-[49px] pl-[5.3%] pr-[6.93%] pb-[49px] md:px-0 md:mt-[100px] md:pb-[100px]' id='concept'>
    <ScrollFade>
    <h2 className={`${oswald.className} text-[clamp(6.4rem,10vw,22.1rem)] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5]
     md:pl-[5.3%]
    `}>CONCEPT</h2></ScrollFade>
    <div className='md:flex gap-x-[6.7%]'>

    <h3 className='text-[2.4rem] font-medium mt-[47px] 
    md:[writing-mode:vertical-rl] md:text-[6.4rem] md:ml-[17.7%]
    '><p>若者に刺さる</p><p className='mt-[10px] md:mt-[115px]'>男前スタイルの拠点</p></h3>

<div className='md:w-[44.8%]'>
    <div className='flex mt-[49px]'>
      <h4 className='[writing-mode:vertical-rl]'>KYOSUKE SATO</h4>

      <div className='relative aspect-[310/255] md:aspect-[411/646] flex-1
      md:h-[411px]
      '>
      <Image src='/concept.png' alt='理容師佐藤京介が、こちらを見ている写真' fill />
      </div>
      
    </div>

    <div>
     <p className='mt-[5px] ml-[8%] text-[1.6rem] leading-[2.9rem] md:text-[3.2rem] md:mt-[44px] md:ml-[1.8%] md:leading-[4.3rem]'>来るだけで<span className='tracking-[-0.304rem]'>、</span>気分も髪もスッキリ。<br/>話しながら君に合うスタイルを作ります。</p>
    <p className='mt-[6px] ml-[8%] md:text-[2rem] md:mt-[41px] md:ml-[1.8%]'>変わるのは髪型だけじゃない<span className='tracking-[-0.35rem]'>。</span>鏡を見るたびに、昨日よりも少し自信<br className='hidden md:block'/>が芽生える。新しい自分に出会う<span className='tracking-[-0.35rem]'>、</span>その瞬間を楽しんでください。<br className='hidden md:block'/>フェードでもクロップでも<span className='tracking-[-0.35rem]'>、</span>ちょっとの勇気で毎日が変わる<span className='tracking-[-0.35rem]'>。</span>その一歩を軽く踏み出せば<span className='tracking-[-0.35rem]'>、</span>そこから後は任せてください<span className='tracking-[-0.35rem]'>。</span>インスタグラムにて<br className='hidden md:block'/>ご予約承っております<span className='tracking-[-0.35rem]'>。</span>あなたの来店を<span className='tracking-[-0.35rem]'>、</span>心よりお待ちしています。</p>
    </div>
</div>
    </div>
       </section>
  )
}

