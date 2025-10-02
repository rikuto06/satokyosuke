import Image from 'next/image';
import React, { useEffect } from 'react'


export default function MenuImage() {
    const [isMobile,setisMobile] = React.useState(false);

    useEffect(()=>{
        const check =()=>setisMobile(window.innerWidth <= 768 );
        check();
        window.addEventListener('resize',check);
        return ()=> window.removeEventListener('resize',check);
    },[]);
    
  return (
    <Image src={isMobile ? '/menuimage-sp.png' : '/menuimage-pc.png'}
    alt='理容師佐藤京介が男性客の髪を切っている写真'
    fill />
  )
}

