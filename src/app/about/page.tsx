'use client'
import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import { oswald } from '@/app/utils/Fonts';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
  return (
    <main>
    <Header/>
    <section className='pb-[49px] md:pb-[100px]'>
    <ol className={`${oswald.className} flex font-light ml-[13%] text-[1.2rem] gap-[16px] items-center`}>
      <li><Link href='/#' aria-label='トップページへ移動' className='underline underline-offset-3 hover:no-underline duration-200'>TOP</Link></li>
      <li className='flex gap-[16px]  items-center'><span className='relative inline-block w-[0.7rem] h-[0.7rem]'><Image src='/Vector.png' alt='' fill/></span>ABOUT ME</li>
    </ol>
    <h2 className={`${oswald.className} text-[clamp(6.4rem,10vw,22.1rem)] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] mx-[13%] mt-[49px] text-center
    md:text-right 
    `}>ABOUT ME</h2>
    <figure className='md:flex md:items-start md:mx-[13%] md:gap-[17.8%]'>
    <div className='relative mx-[13%] aspect-[290/378] mt-[49px] h-[378px] 
    md:aspect-[426/568] md:h-[568px] md:mx-0 
    '>
        <Image src='/aboutimg.jpeg' alt='理容師佐藤恭介がこちらをみている画像' fill  className='object-cover'/>
    </div>
    <div>
    <figcaption className='mt-[32px] px-[5.3%] md:px-0 md:mt-[43px]'>
      <div>
      <p className={`${oswald.className} font-bold md:text-[1.6rem]`}>KYOSUKE SATO</p>
      <p className='text-[2.2rem] md:text-[2.8rem]'>佐藤 京介</p>
      </div>
      <p className='mt-[24px] lg:text-[1.6rem] 2xl:text-[2.8rem]'>佐藤 京介です。男らしさを引き立てるスタイルを得意としており、<span className='tracking-[-0.21rem]'/>一人ひとりの雰囲気に合った仕上がりを意識しています。施術中は居心地の良さを大切にし、<span className= 'tracking-[-0.21rem]'/>リラックスして過ごせる時間を心がけています。仕上がった瞬間に気分が上がるような、<span className='tracking-[-0.21rem]'/>そんな感覚を味わってもらえると嬉しいです。髪を整えることが、<span className='tracking-[-0.21rem]'/>自分を整えることにつながる。そう感じてもらえるよう、<span className='tracking-[-0.21rem]'/>丁寧に向き合っていきます。</p>
    </figcaption>
        <div className= {`${oswald.className} font-medium mt-[17px] px-[4.8%] flex gap-[5.33%] md:px-0 md:text-[1.6rem]`}>
      <Link href='https://beauty.hotpepper.jp/slnH000379984/stylist/T001061791/?fbclid=PAZXh0bgNhZW0CMTEAAadK5RGUzkzEDWc9nrEl_H9B0MHoGv_6rKcGNpfehGSTW7sPtal2UdvdZo7dxQ_aem_npgvnsT3_S-RYx-MZjsOmQ#' aria-label='ホットペッパービューティーのページへ移動' target='_blank' className='hover:opacity-70'>HOTPEPPER BEAUTY</Link>
      <Link href='https://www.instagram.com/ky0_1?utm_source=ig_web_button_share_sheet&igsh=NmZrMnE4ZTR4NDJ3' aria-label='インスタグラムのページへ移動' target='_blank' className='hover:opacity-70'>INSTAGRAM</Link>
    </div>
    </div>
    </figure>
</section>
    <Contact/>
    <Footer/>
    </main>
  )

}




