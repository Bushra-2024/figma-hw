'use client'
import React from 'react'
import Image from 'next/image'
import facebook from '../../../public/Facebook.png'
import insta from '../../../public/Instagram.png'
import x from '../../../public/Twitter.png'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="max-w-[1400px] m-auto flex lg:flex-row flex-col justify-between lg:items-center p-[2%] px-[8%] bg-[#107E5F] text-white">
      <div className="contactinfo w-[18%]">
        <h3 className="text-[30px] mb-[10px]">{t('footer.contactUs')}</h3>
        <p><strong className="text-white text-[22px]">{t('footer.email')}</strong><br />needhelp@organick.com</p>
        <p><strong className="text-white text-[22px]">{t('footer.phone')}</strong><br />123 (1254) 1452</p>
        <p><strong className="text-white text-[22px]">{t('footer.address')}</strong><br />88 Road, Brooklyn Street, USA</p>
      </div>
      
      <div className="center w-[30%]">
        <h1 className="font-[windsong] text-[50px] mb-[30px]">Armaghan</h1>
        <p className="mb-[40px] text-[20px] text-[#BEB9B9]">
          {t('footer.description1')}
          <span className="font-[windsong] font-semibold text-[20px]"> Armaghan </span>
          {t('footer.description2')}
        </p>
        <div className="mediaicons flex gap-[70px]">
          <Link href={'https://www.facebook.com/'}>
            <Image src={facebook} alt="Facebook" width={40} height={40} className="hover:bg-[#b3adad4b] cursor-pointer" />
          </Link>
          <Link href={"https://www.instagram.com/"}>
            <Image src={insta} alt="Instagram" width={40} height={40} className="hover:bg-[#b3adad4b] cursor-pointer" />
          </Link>
          <Link href={"https://x.com/?lang=en"}>
            <Image src={x} alt="Twitter" width={40} height={40} className="hover:bg-[#b3adad4b] cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
