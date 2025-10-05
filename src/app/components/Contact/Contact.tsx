import React from 'react'
import { oswald } from '@/app/utils/Fonts'
import Link from 'next/link'

export default function Contact() {
  return (
  <section className="bg-[url('/contactbg.jpg')] bg-cover bg-center">
    <h2 className={`${oswald.className} text-[6.4rem] text-transparent font-bold leading-[100%] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#F5F5F5]
        md:text-[22.1rem]`}>CONTACT ME</h2>
        <p>ご予約・お問い合わせは<br/>hotpepper beauty、インスタグラムの<br/>DMにて承っております。</p>
        <p>バチバチにきまる髪型にしましょう。新しい自分に更新して、毎日をもっと熱くしましょう。男らしさ感じるスタイルに仕上げます。日常をちょっとでも楽しくしたいなら来てください。</p>
        <Link href='https://beauty.hotpepper.jp/slnH000379984/stylist/T001061791/?fbclid=PAZXh0bgNhZW0CMTEAAaeDPLpCQNNnrYJdCfvsI_W0J2tcudCsVfhgaaLY0aXqVKXGoVURvr_b5BQiuQ_aem_04x1T4Nx4n0OqbYpW3Kojw' aria-label='ホットペッパービューティーのページへ移動' target='_blank'>HOTPEPPER BEAUTY</Link>
        <Link href='https://www.instagram.com/ky0_1?utm_source=ig_web_button_share_sheet&igsh=NmZrMnE4ZTR4NDJ3' aria-label='インスタグラムアカウントページへ移動' target='_blank'>INSTAGRAM</Link>
</section>
  )
}
