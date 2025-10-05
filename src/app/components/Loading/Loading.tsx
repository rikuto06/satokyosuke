'use client'
import { oswald } from '@/app/utils/Fonts';
import React, { useEffect, useState } from 'react'



export default function Loading() {
    const [isLoading,setisLoading] = React.useState(true);


    useEffect(()=>{
        const Timer = setTimeout(()=>{
            setisLoading(false);
        },3500)
    },[])

    if(!isLoading)return null;

  return (
    <div className={`${oswald.className} fixed inset-0 z-[9999] flex flex-col items-center justify-center text-center font-bold bg-[#0D0D0D] animate-fadeOut`}>
    <div className='text-[3.6rem]'>KYOSUKE SATO</div>
    <div className='text-[2.7rem] mt-[6px]'>BARBER</div>
    </div>
)
}


