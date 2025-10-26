import { section } from 'motion/react-m'
import Image from 'next/image'
import React from 'react'

export default function Mv() {
  return (
    <section>
        <h2>男の覚悟を刻み込もう</h2>
        <p>TO ALL BOYS</p>
        <div className='relative aspect-[344/432]'>
        <Image src='/mv.png' alt='理容師佐藤京介が男性客の髪を切っている様子の画像' fill/>
        </div>
        <div className='relative aspect-[678/390]'>
        <Image src='/wash.png' alt='理容師佐藤京介が男性客の髪を洗っている様子の画像' fill/>
        </div>
    </section>
  )
}

