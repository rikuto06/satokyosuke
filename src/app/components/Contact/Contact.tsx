import React from 'react'
import { oswald } from '@/app/utils/Fonts'
import Link from 'next/link'

export default function Contact() {
  return (
  <section className="bg-[url('/contactbg.jpg')] bg-cover bg-center md:pt-[160px] md:pb-[160px]">
    <h2 className={`${oswald.className} text-[6.4rem] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] text-center
        md:text-[22.1rem]`}>CONTACT</h2>
        <div className='flex flex-col px-[14.9%]'>
        <p className='text-[1.6rem] mt-[9px]
        md:text-[2.9rem] md:mt-[80px]
        '>ご予約・お問い合わせは<br className='md:hidden'/>hotpepper beauty<br className='hidden md:block'/>インスタグラムの<br className='md:hidden'/>DMにて承っております。</p>
        <p className='text-left mt-[15px] md:text-center md:text-[16px] md:mt-[30px]'>バチバチにきまる髪型にしましょう。<br className='md:hidden'/>新しい自分に更新して、<br className='hidden md:block'/>毎日をもっと熱くしましょう。<br className='hidden md:block'/>男らしさ感じるスタイルに仕上げます。<br className='hidden md:block'/>日常をちょっとでも楽しくしたいなら来てください。</p>
        <div className=' mt-[10px] text-left'>
        <Link href='https://beauty.hotpepper.jp/slnH000379984/stylist/T001061791/?fbclid=PAZXh0bgNhZW0CMTEAAaeDPLpCQNNnrYJdCfvsI_W0J2tcudCsVfhgaaLY0aXqVKXGoVURvr_b5BQiuQ_aem_04x1T4Nx4n0OqbYpW3Kojw' aria-label='ホットペッパービューティーのページへ移動' target='_blank' className={`${oswald.className} block font-bold hover:opacity-80`}>HOTPEPPER BEAUTY</Link>
        <Link href='https://www.instagram.com/ky0_1?utm_source=ig_web_button_share_sheet&igsh=NmZrMnE4ZTR4NDJ3' aria-label='インスタグラムアカウントページへ移動' target='_blank' className={`${oswald.className} block font-bold hover:opacity-80`}>INSTAGRAM</Link>
        </div>
        </div>
</section>
  )
}
