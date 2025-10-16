'use client'
import React from 'react'
import { oswald } from "@/app/utils/Fonts";
import Link from 'next/link';
import Image from 'next/image';

interface ViewProps {
  href:string;
  ariaLabel:string
}


export default function Viewmore({href,ariaLabel}:ViewProps) {
    const [isHovered, setIsHovered] = React.useState(false);
  return (
     <div
        className={`${oswald.className} mt-[39px] md:mt-[48px] flex justify-end md:mr-[9.71%]`}
      >
        <Link
          href={href}
          aria-label={ariaLabel}
          className="flex items-center gap-x-[10px] relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='md:text-[1.8rem] 2xl:text-[3rem]'>VIEW MORE</div>
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
  )
}
