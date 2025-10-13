import { oswald } from '@/app/utils/Fonts'
import ScrollFade from '@/app/utils/ScrollFade'
import React from 'react'

export default function Access() {
  return (
    <section className='px-[5.3%] mt-[49px] md:mt-[100px] pb-[34px] md:pb-[100px] flex flex-col md:flex-row md:gap-[10%]'>

    <div className='contents md:block'>
    <ScrollFade>
      <h2 className={`${oswald.className} text-[clamp(6.4rem,10vw,22.1rem)] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5]`} id='access'>ACCESS</h2>
      </ScrollFade>
     
    <dl className='order-2 mt-[27px] md:mt-[133px]'>
      <dt className='mt-[27px] md:mt-0 text-[1.6rem] md:text-[1.8rem]'>住所</dt>
      <dd className='mt-[15px] md:text-[1.8rem]'>〒153-0042 東京都目黒区青葉台<br className='md:hidden'/>１丁目１８−３ ハナブサマンション 201</dd>
      <dt className='mt-[25px] text-[1.6rem] md:text-[1.8rem]'>アクセス</dt>
      <dd className='mt-[15px] md:text-[1.8rem]'>東急東横線・東京メトロ日比谷線<br className='md:hidden'/>中目黒駅 正面改札から徒歩7分</dd>
      <dt className='mt-[25px] text-[1.6rem] md:text-[1.8rem]'>受付時間</dt>
      <dd className='mt-[15px] md:text-[1.8rem]'>13時～21時(変動あり)</dd>
    </dl>
    </div>
    <iframe className='h-[322px] w-full mt-[51px] md:mt-0  md:h-auto md:w-[39.6%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6484.38156047228!2d139.69522607583437!3d35.64767097259802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4e5ccebb51%3A0x47e3fa352cab3e4!2zZnJvbTAyODfvvIjjg5jjgqLjgIHjg5zjg4fjgqPjgIHjg6Hjg7Pjgr_jg6vjgIHjgrTjg4Pjg4njgq_jg6rjg7zjg4rjg7zvvInntKDnspLmsLTmraPopo_lj5bmibHku6PnkIblupc!5e0!3m2!1sja!2sjp!4v1759395957543!5m2!1sja!2sjp" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

