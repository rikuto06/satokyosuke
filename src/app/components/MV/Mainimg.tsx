import Image from 'next/image';
import React, { useEffect } from 'react'

export default function Mainimg() {
    const [isMobile,setisMobile] = React.useState(false);
    
        useEffect(()=>{
            const check =()=>setisMobile(window.innerWidth <= 768 );
            check();
            window.addEventListener('resize',check);
            return ()=> window.removeEventListener('resize',check);
        },[]);
  return (
    <Image src={isMobile ? '/mv-sp.png' : '/mv-pc.png'} alt='理容師佐藤京介が、男性の髪をバリカンで刈り上げている画像' fill/>
  )
}

