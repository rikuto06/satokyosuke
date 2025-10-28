import React, { useEffect, useRef } from 'react'
import { oswald } from '@/app/utils/Fonts'
import Link from 'next/link'
import Image from 'next/image';
import gsap from 'gsap';
import _SplitText from 'gsap/SplitText';
import ScrollFade from '@/app/utils/ScrollFade';
import ScrollSlide from '@/app/utils/ScrollSlide';
import { img } from 'motion/react-client';
import Contactan from '@/app/utils/Contactan';

gsap.registerPlugin(_SplitText);

export default function Contact() {
  const [isHoveredhb, setIsHoveredhb] = React.useState(false);
  const [isHoveredig, setIsHoveredig] = React.useState(false);


    
  return (
  <section className="bg-[url('/contactbg.png')]  bg-cover bg-center py-[49px] pl-[5.3%] md:py-[100px] md:flex md:items-center md:gap-[12.6%]" id='contact'>
    <h2 className={`${oswald.className} text-transparent [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] text-[clamp(6.4rem,10vw,22.1rem)] font-bold
    `}>CONTACT</h2>
  <Contactan>
    <Link
          href="https://beauty.hotpepper.jp/slnH000379984/stylist/T001061791/?fbclid=PAZXh0bgNhZW0CMTEAAadK5RGUzkzEDWc9nrEl_H9B0MHoGv_6rKcGNpfehGSTW7sPtal2UdvdZo7dxQ_aem_npgvnsT3_S-RYx-MZjsOmQ#"
          aria-label="ホットペッパービューティーのページへ移動"
          target='_blank'
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
          href="https://www.instagram.com/ky0_1?utm_source=ig_web_button_share_sheet&igsh=NmZrMnE4ZTR4NDJ3"
          aria-label="インスタグラムのページへ移動"
          target='_blank'
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
        </Contactan>
</section>
  )
}
