import React from 'react'
import { oswald } from '@/app/utils/Fonts'
import Link from 'next/link'
import Image from 'next/image';

export default function Contact() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
  <section className="bg-[url('/contactbg.jpg')] bg-cover bg-center py-[49px] pl-[5.3%] md:py-[100px] md:flex md:items-center md:gap-[12.6%]">
    <h2 className={`${oswald.className} text-transparent [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] text-[6.4rem] font-bold
    md:text-[22.1rem]
    `}>CONTACT</h2>
    <div>
    <Link
          href="#"
          aria-label="ホットペッパービューティーのページへ移動"
          className={`${oswald.className} font-bold flex items-center gap-x-[10px] relative`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='text-[2.1rem] md:text-[3.2rem]'>HOTPEPPER BEAUTY</div>
          <div className="h-[16px] w-[16px] relative overflow-hidden">
            {/* 最初の矢印 */}
            <div
              className="absolute inset-0"
              style={{
                transform: isHovered ? "translateX(100%)" : "translateX(0)",
                transition: isHovered ? "transform 0.6s" : "none",
              }}
            >
              <Image src="/Vector.png" alt="" fill className="object-contain" />
            </div>
            {/* 2番目の矢印 */}
            <div
              className="absolute inset-0"
              style={{
                transform: isHovered ? "translateX(0)" : "translateX(-100%)",
                transition: isHovered ? "transform 0.6s 0.2s" : "none",
              }}
            >
              <Image src="/Vector.png" alt="" fill className="object-contain" />
            </div>
          </div>
        </Link>
    <Link
          href="#"
          aria-label="インスタグラムのページへ移動"
          className={`${oswald.className} flex items-center gap-x-[10px] relative mt-[18px]`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='text-[2.1rem] md:text-[3.2rem] font-bold'>INSTAGRAM</div>
          <div className="h-[16px] w-[16px] relative overflow-hidden">
            {/* 最初の矢印 */}
            <div
              className="absolute inset-0"
              style={{
                transform: isHovered ? "translateX(100%)" : "translateX(0)",
                transition: isHovered ? "transform 0.6s" : "none",
              }}
            >
              <Image src="/Vector.png" alt="" fill className="object-contain" />
            </div>
            {/* 2番目の矢印 */}
            <div
              className="absolute inset-0"
              style={{
                transform: isHovered ? "translateX(0)" : "translateX(-100%)",
                transition: isHovered ? "transform 0.6s 0.2s" : "none",
              }}
            >
              <Image src="/Vector.png" alt="" fill className="object-contain" />
            </div>
          </div>
        </Link>
        </div>
</section>
  )
}

