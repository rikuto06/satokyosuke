'use client'
import React from 'react'
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
    <h2 className={`${oswald.className} text-[clamp(6.4rem,10vw,22.1rem)] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] ml-[13.86%]`}>ABOUT ME</h2>
    <figure>
    <div className='relative mx-[13%] aspect-[290/378] mt-[48px] '>
        <Image src='/aboutimg.jpeg' alt='理容師佐藤恭介がこちらをみている画像' fill className='absolute'/>
    </div>
    <figcaption className='mt-[32px] px-[5.3%]'>
      <div>
      <p className={`${oswald.className} font-bold`}>KYOSUKE SATO</p>
      <p className='text-[2.2rem]'>佐藤 京介</p>
      </div>
      <p className='mt-[24px]'>佐藤 京介です。男らしさを引き立てるスタイルを得意としており、<span className='tracking-[-0.21rem]'/>一人ひとりの雰囲気に合った仕上がりを意識しています。施術中は居心地の良さを大切にし、<span className='tracking-[-0.21rem]'/>リラックスして過ごせる時間を心がけています。仕上がった瞬間に気分が上がるような、<span className='tracking-[-0.21rem]'/>そんな感覚を味わってもらえると嬉しいです。髪を整えることが、<span className='tracking-[-0.21rem]'/>自分を整えることにつながる。そう感じてもらえるよう、<span className='tracking-[-0.21rem]'/>丁寧に向き合っていきます。</p>
    </figcaption>
    </figure>
    <div className= {`${oswald.className} font-medium mt-[17px] px-[4.8%] flex gap-[5.33%] `}>
      <Link href='' aria-label=''>HOTPEPPER BEAUTY</Link>
      <Link href='' aria-label=''>INSTAGRAM</Link>
    </div>
    <Contact/>
    <Footer/>
    </main>
  )

}




