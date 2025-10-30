"use client";
import React from "react";
import { oswald } from "@/app/utils/Fonts";
import Image from "next/image";
import Viewmore from "@/app/utils/Viewmore";
import ScrollFade from "@/app/utils/ScrollFade";

const images = [
  "/about-bind.jpeg",
  "/about-ciga.jpg",
  "/about-dj.jpeg",
  "/about-drink.jpeg",
  "/about-dtb.jpeg",
  "/about-hat.jpeg",
  "/about-l.jpeg",
  "/about-leopard.jpg",
  "/about-perm.jpeg",
  "/about-profile.jpg",
  "/about-smile.jpg",
  "/about-standing-side.jpeg",
  "/about-standing.jpeg",
  "/about-stayfree.jpeg",
  "/about-sunglass.jpeg",
  "/about-sunshine.jpeg",
  "/about-v.jpg",
  "/about-red.jpg",
  "/about-train.jpg",
];

export default function Aboutpc() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isInImageArea, setIsInImageArea] = React.useState(false);
  const areaRef = React.useRef<HTMLDivElement>(null);


  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });

    if (!areaRef.current) return;

    const rect = areaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    //  横19列 × 縦10行
    const cols = 19;
    const rows = 10;
    const cellWidth = rect.width / cols;
    const cellHeight = rect.height / rows;

    const col = Math.floor(x / cellWidth);
    const row = Math.floor(y / cellHeight);
    const gridIndex = (row * cols + col) % images.length;

    setCurrentImage(gridIndex);
  };

  const handleMouseEnter = () => {
    setIsInImageArea(true);
    setCurrentImage(Math.floor(Math.random() * images.length));
  };

  const handleMouseLeave = () => {
    setIsInImageArea(false);
  };

  return (
    <section className="bg-[#001A00] py-[100px]">
      {/* カーソル画像エリア */}
      <div
        ref={areaRef}
        className="cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2
          className={`${oswald.className}  text-[22.1rem] text-transparent text-[6.5rem] font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] rotate-[0.03deg] text-center`}
        >
          ABOUT
          <br />
          ME
        </h2>

        <div className="flex justify-center mt-[78px]">
          <p className="text-left text-[1.6rem]">
            フェードやクロップを始めたきっかけは
            <span className="tracking-[-0.35rem]">「</span>男らしさを
            <br />
            際立たせるため」。施術では肩の力を抜いて過ごせる
            <br />
            よう<span>、</span>居心地を大切にしています。
          </p>
        </div>
      </div>

      {/* カスタムカーソル画像 */}
      {isInImageArea && images[currentImage] && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative w-[200px] h-[200px]">
            <Image
              src={images[currentImage]}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* VIEW MOREボタン - 通常カーソルエリア */}
      <Viewmore href="/about" ariaLabel="アバウトページへ移動"/>
    </section>
  );
}

