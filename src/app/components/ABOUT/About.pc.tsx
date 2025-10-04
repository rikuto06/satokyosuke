import React from 'react'
import { oswald } from '@/app/utils/Fonts';
import Image from 'next/image';
import Link from 'next/link';

const images = ['/about-bind.jpeg','/about-ciga.jpg','/about-dj.jpeg','/about-drink.jpeg','/about-dtb.jpeg','/about-hat.jpeg','/about-l.jpeg','/about-leopard.jpg','/about-perm.jpeg','/about-profile.jpg','/about-smile.jpg','/about-standing-side.jpeg','/about-standing.jpeg','/about-stayfree.jpeg','/about-sunglass.jpeg','/about-sunshine.jpeg','/about-v.jpg','/about-red.jpg','/about-train.jpg']

export default function Aboutpc() {
    const [mousePosition, setMousePosition] = React.useState({x:0, y:0});
    const [currentImage, setCurrentImage] = React.useState(0);
    const [isInImageArea, setIsInImageArea] = React.useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        setMousePosition({x: e.clientX, y: e.clientY});
        
        // マウス位置に応じてランダムに画像を変更
        if (Math.random() > 0.95) {
            setCurrentImage(Math.floor(Math.random() * images.length));
        }
    };
    
    const handleMouseEnter = () => {
        setIsInImageArea(true);
        setCurrentImage(Math.floor(Math.random() * images.length));
    };

    const handleMouseLeave = () => {
        setIsInImageArea(false);
    };

    return (
        <section className='bg-[#001A00] py-[160px]'>
            {/* カーソル画像エリア */}
            <div
                className='cursor-none'
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h2 className={`${oswald.className} text-[22.1rem] text-transparent text-[6.5rem] font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] text-center`}>
                    ABOUT<br/>ME
                </h2>
                
                <div className='flex justify-center mt-[78px]'>
                    <p className='text-left text-[1.6rem]'>
                        フェードやクロップを始めたきっかけは<span className='tracking-[-0.35rem]'>「</span>男らしさを<br/>
                        際立たせるため」。施術では肩の力を抜いて過ごせる<br/>
                        よう<span>、</span>居心地を大切にしています。
                    </p>
                </div>
            </div>
            
            {/* カスタムカーソル画像 */}
            {isInImageArea && images[currentImage] && (
                <div 
                    className='fixed pointer-events-none z-50'
                    style={{ 
                        left: `${mousePosition.x}px`, 
                        top: `${mousePosition.y}px`,
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <div className='relative w-[200px] h-[200px]'>
                        <Image 
                            src={images[currentImage]} 
                            alt='' 
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>
            )}
            
            {/* VIEW MOREボタン - 通常カーソルエリア */}
            <div className={`${oswald.className} mt-[39px]`}>
                <Link href='/about' aria-label='ABOUTページへ移動' className='flex items-center gap-[11px] justify-end cursor-pointer'>
                    VIEW MORE 
                    <span className='relative block h-[16px] w-[16px]'>
                        <Image src='/Vector.png' alt='' fill/>
                    </span>
                </Link>
            </div>
        </section>
    )
}