import React from 'react'
import Image from 'next/image'
import { oswald } from '@/app/utils/Fonts';
import Link from 'next/link';

export default function Works() {
 return (
    <section className='px-[10.8%] mt-[49px]'>
        <h2 className={`${oswald.className} text-[6.4rem] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5]`}>WORKS</h2>
        <div className='grid grid-cols-2 gap-x-[18.6%] gap-y-[75px] mt-[50px]'>
      <div className='relative h-[155px] w-full'>
                <Image
    src={'/hair-sunglassgold.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full'>
                <Image
    src={'/haircrop-shaved.jpg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full'>
                <Image
    src={'/hair-gold.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full'>
                <Image
    src={'/hair-pink.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full'>
                <Image
    src={'/hair-line.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full'>
                <Image
    src={'/hair-perm.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full'>
                <Image
    src={'/hair-perm-dread.jpg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full'>
                <Image
    src={'/hair-gold-easyperm.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
            </div>
            <div className={`${oswald.className} mt-[39px]`}>
          <Link href='#' aria-label='WORKSページへ移動' className='flex items-center gap-[11px] justify-end'>VIEW MORE <span className='relative block h-[16px] w-[16px]'><Image src='/Vector.png' alt='' fill/></span></Link>
      </div>
    </section>
  )
}

