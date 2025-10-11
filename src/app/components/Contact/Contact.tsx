import React, { useEffect, useRef } from 'react'
import { oswald } from '@/app/utils/Fonts'
import Link from 'next/link'
import Image from 'next/image';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import _SplitText from 'gsap/SplitText';
import ScrollFade from '@/app/utils/ScrollFade';

gsap.registerPlugin(_SplitText);

export default function Contact() {
  const [isHoveredhb, setIsHoveredhb] = React.useState(false);
  const [isHoveredig, setIsHoveredig] = React.useState(false);


      
    
  return (
  <section className="bg-[url('/contactbg.jpg')] bg-cover bg-center py-[49px] pl-[5.3%] md:py-[100px] md:flex md:items-center md:gap-[12.6%]">
    <ScrollFade>
    <h2 className={`${oswald.className} text-transparent [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] text-[clamp(6.4rem,10vw,22.1rem)] font-bold
    `}>CONTACT</h2></ScrollFade>
    <div>
    <Link
          href="#"
          aria-label="ホットペッパービューティーのページへ移動"
          className={`${oswald.className} font-bold flex items-center gap-x-[10px] relative`}
          onMouseEnter={() => setIsHoveredhb(true)}
          onMouseLeave={() => setIsHoveredhb(false)}
        >
          <div className='text-[2.1rem] md:text-[3.2rem]'>HOTPEPPER BEAUTY</div>
          <div className="h-[16px] w-[16px] relative overflow-hidden">
            {/* 最初の矢印 */}
            <div
              className="absolute inset-0"
              style={{
                transform: isHoveredhb ? "translateX(100%)" : "translateX(0)",
                transition: isHoveredhb ? "transform 0.6s" : "none",
              }}
            >
              <Image src="/Vector.png" alt="" fill className="object-contain" />
            </div>
            {/* 2番目の矢印 */}
            <div
              className="absolute inset-0"
              style={{
                transform: isHoveredhb ? "translateX(0)" : "translateX(-100%)",
                transition: isHoveredhb ? "transform 0.6s 0.2s" : "none",
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
          onMouseEnter={() => setIsHoveredig(true)}
          onMouseLeave={() => setIsHoveredig(false)}
        >
          <div className='text-[2.1rem] md:text-[3.2rem] font-bold'>INSTAGRAM</div>
          <div className="h-[16px] w-[16px] relative overflow-hidden">
            {/* 最初の矢印 */}
            <div
              className="absolute inset-0"
              style={{
                transform: isHoveredig ? "translateX(100%)" : "translateX(0)",
                transition: isHoveredig ? "transform 0.6s" : "none",
              }}
            >
              <Image src="/Vector.png" alt="" fill className="object-contain" />
            </div>
            {/* 2番目の矢印 */}
            <div
              className="absolute inset-0"
              style={{
                transform: isHoveredig ? "translateX(0)" : "translateX(-100%)",
                transition: isHoveredig ? "transform 0.6s 0.2s" : "none",
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

