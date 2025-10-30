import React from "react";
import Image from "next/image";
import { oswald } from "@/app/utils/Fonts";
import Viewmore from "@/app/utils/Viewmore";
import ScrollFade from "@/app/utils/ScrollFade";
import ScrollSlide from "@/app/utils/ScrollSlide";

export default function Works() {
  return (
    <section className="px-[10.8%] mt-[49px] md:px-0 md:mt-[100px] md:pb-[100px]">
      <ScrollFade>
        <h2
          className={`${oswald.className} rotate-[0.03deg] text-[clamp(6.4rem,10vw,22.1rem)] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5] md:ml-[5.3%]`}
        >
          WORKS
        </h2>
      </ScrollFade>
      <div
        className="grid grid-cols-2 gap-x-[18.6%] gap-y-[75px] mt-[50px]
        md:grid-cols-5 md:px-[9.1%] md:gap-x-[12.7%] md:gap-y-[237px] md:mt-[100px]
        "
      >
        <div className="relative aspect-[89/123] hover:scale-150 duration-300">
          <Image
            src={"/hair-sunglassgold.jpeg"}
            alt="ヘアスタイル画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative  aspect-[89/123] hover:scale-150 duration-300">
          <Image
            src={"/haircrop-shaved.jpg"}
            alt="ヘアスタイル画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[89/123] hover:scale-150 duration-300 z-50">
          <Image
            src={"/hair-gold.jpeg"}
            alt="ヘアスタイル画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[89/123] hover:scale-150 duration-300 z-50">
          <Image
            src={"/hair-pink.jpeg"}
            alt="ヘアスタイル画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[89/123] hover:scale-150 duration-300 z-50">
          <Image
            src={"/hair-line.jpeg"}
            alt="ヘアスタイル画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[89/123] hover:scale-150 duration-300 z-50">
          <Image
            src={"/hair-perm.jpeg"}
            alt="ヘアスタイル画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[89/123] hover:scale-150 duration-300 z-50">
          <Image
            src={"/hair-perm-dread.jpg"}
            alt="ヘアスタイル画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[89/123] hover:scale-150 duration-300">
          <Image
            src={"/hair-gold-easyperm.jpeg"}
            alt="ヘアスタイル画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[89/123] hover:scale-150 duration-300">
          <Image
            src={"/hair-jm.jpeg"}
            alt="ヘアスタイル画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[89/123] hover:scale-150 duration-300">
          <Image
            src={"/hairek.jpeg"}
            alt="ヘアスタイル画像"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <Viewmore href="/works" ariaLabel="ワークスページへ移動" />
    </section>
  );
}
