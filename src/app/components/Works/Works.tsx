import React from 'react'
import Image from 'next/image'
import { oswald } from '@/app/utils/Fonts';
import Link from 'next/link';
import Viewmore from '@/app/utils/Viewmore';

export default function Works() {
 return (
    <section className='px-[10.8%] mt-[49px] md:px-0 md:mt-[160px]'>
        <h2 className={`${oswald.className} text-[6.4rem] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] md:md:text-[22.1rem] md:ml-[5.3%]`}>WORKS</h2>
        <div className='grid grid-cols-2 gap-x-[18.6%] gap-y-[75px] mt-[50px]
        md:grid-cols-5 md:px-[9.1%] md:gap-x-[12.7%] md:gap-y-[237px]
        '>
      <div className='relative h-[155px] w-full md:h-[123px]'>
                <Image
    src={'/hair-sunglassgold.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full md:h-[123px]'>
                <Image
    src={'/haircrop-shaved.jpg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full md:h-[123px]'>
                <Image
    src={'/hair-gold.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full md:h-[123px]'>
                <Image
    src={'/hair-pink.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full md:h-[123px]'>
                <Image
    src={'/hair-line.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full md:h-[123px]'>
                <Image
    src={'/hair-perm.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full md:h-[123px]'>
                <Image
    src={'/hair-perm-dread.jpg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full md:h-[123px]'>
                <Image
    src={'/hair-gold-easyperm.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full md:h-[123px]'>
                <Image
    src={'/hair-jm.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
      <div className='relative h-[155px] w-full md:h-[123px]'>
                <Image
    src={'/hairek.jpeg'}
    alt='ヘアスタイル画像'
    fill
    className='object-cover'
      />
      </div>
            </div>
            <Viewmore/>
    </section>
  )
}


