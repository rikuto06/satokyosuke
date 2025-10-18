import Image from 'next/image'
import React from 'react'
import { oswald } from '@/app/utils/Fonts';

interface WorksProps {
    imgsrc:string
    hairex:string
}

export default function WorksCard({imgsrc,hairex}:WorksProps) {
  return (
    <figure>
        <div className='relative aspect-[163/222] md:aspect-[332/442]'>
            <Image src={imgsrc} alt='ヘアスタイルの一例です' fill/>
        </div>
        <figcaption className={`${oswald.className} md:text-[1.6rem]`}>{hairex}</figcaption>
    </figure>
  )
}
