'use client';
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import Menu from "./components/Menu/Menu";
import Concept from "./components/Concept/Concept";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Mainvisual from "./components/MV/Mainvisual";
import About from "./components/ABOUT/About.sp";
import Works from "./components/Works/Works";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    "name": "from0287（フロムゼロニーハチナナ）",
    "address": {
      "@type": "PostalAddress",
      "postalCode": "153-0042",
      "addressCountry": "JP",
      "addressRegion": "東京都",
      "addressLocality": "目黒区青葉台",
      "streetAddress": "1丁目18−3 ハナブサマンション 201"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "opens": "12:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.instagram.com/ky0_1?utm_source=ig_web_button_share_sheet&igsh=NmZrMnE4ZTR4NDJ3",
      "https://beauty.hotpepper.jp/slnH000379984/stylist/T001061791/?fbclid=PAZXh0bgNhZW0CMTEAAadzgH2CkGbAiyQvFjV8qOhRgPVLXGcYd26Ccyt2bOn5ExQz-1ut4bFz7FS2Sw_aem_YySqX-5zy9ElrZaeg9OcbA"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "メニュー",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CUT（カット）",
            "description": "新規・リピーターで料金が異なります"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "新規",
              "price": "7700",
              "priceCurrency": "JPY"
            },
            {
              "@type": "Offer",
              "name": "リピーター",
              "price": "6600",
              "priceCurrency": "JPY"
            }
          ]
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "COLOR（カラー）",
            "description": "カット料金にプラス6000円"
          },
          "price": "6000",
          "priceCurrency": "JPY"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PERM（パーマ）",
            "description": "カット料金にプラス6000円"
          },
          "price": "6000",
          "priceCurrency": "JPY"
        }
      ]
    }
  };

  return (
    <>
      <Header/>
      <Mainvisual/>
      <Message/>
      <Concept/>
      <About/>
      <Works/>
      <Menu/>
      <Contact/>
      <Footer/>

      {/* JSON-LD を埋め込む */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
