/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Image from 'next/image'
import React from 'react'
import three from '../../../public/download5.jpeg'
import four from '../../../public/download7.jpeg'
import five from '../../../public/Afghannecklace.jpeg'
import six from '../../../public/download2.jpeg'
import seven from '../../../public/download3.jpeg'
import girl from '../../../public/afghangirl.jpeg'
import dress from '../../../public/download9.jpeg'
import bangle from '../../../public/bangle.jpeg'
import jwelery from '../../../public/jwelery.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination } from 'swiper/modules'
import { useTranslation } from 'react-i18next'

const page = () => {
	const { t } = useTranslation()

	return (
		<div className='max-w-[1400px] m-auto'>
			<section className='text-center my-[5%]'>
				<h1 className='text-[43px] my-[50px]'>
					{t('topCategories.heading').split(' ')[0]}{' '}
					<span className='font-[windsong] font-semibold italic text-[30px] text-[#107E5F]'>
						{t('topCategories.heading').split(' ')[1]}
					</span>{' '}
					{t('topCategories.heading').split(' ').slice(2).join(' ')}
				</h1>				
				<div className='flex  lg:flex-row flex-col items-center text-[22px] justify-center'>
					<div className='w-full h-[900px]'>
						<Swiper
							effect={'coverflow'}
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={'auto'}
							coverflowEffect={{
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							}}
							pagination={true}
							modules={[EffectCoverflow, Pagination]}
							className='swiperr'
						>
							<SwiperSlide>
								<Image src={three} alt='img' />
							</SwiperSlide>
							<SwiperSlide>
								<Image src={six} alt='img' />
							</SwiperSlide>
							<SwiperSlide>
								<Image src={seven} alt='img' />
							</SwiperSlide>

						</Swiper>
						<h3 className='mt-4 font-semibold'>
							{t('topCategories.classicTitle')}
						</h3>
						<p className='text-[18px]'>{t('topCategories.classicDesc')}</p>
					</div>

					<div className='w-full h-[900px]'>
						<Swiper
							effect={'coverflow'}
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={'auto'}
							coverflowEffect={{
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							}}
							pagination={true}
							modules={[EffectCoverflow, Pagination]}
							className='swiperr'
						>
							<SwiperSlide>
								<Image src={four} alt='img' />
							</SwiperSlide>
							<SwiperSlide>
								<Image src={girl} alt='img' />
							</SwiperSlide>
							<SwiperSlide>
								<Image src={dress} alt='img' />
							</SwiperSlide>
							
						</Swiper>
						<h3 className='mt-4 font-semibold'>
							{t('topCategories.ancestralTitle')}
						</h3>
						<p className='text-[18px]'>{t('topCategories.ancestralDesc')}</p>
					</div>

					<div className='w-full h-[900px]'>
						<Swiper
							effect={'coverflow'}
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={'auto'}
							coverflowEffect={{
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							}}
							pagination={true}
							modules={[EffectCoverflow, Pagination]}
							className='swiperr'
						>
							<SwiperSlide>
								<Image src={five} alt='img' />
							</SwiperSlide>
							<SwiperSlide>
								<Image src={bangle} alt='img' />
							</SwiperSlide>
							<SwiperSlide>
								<Image src={jwelery} alt='img' />
							</SwiperSlide>				
						</Swiper>
						<h3 className='mt-4 font-semibold'>
							{t('topCategories.vintageTitle')}
						</h3>
						<p className='text-[18px]'>{t('topCategories.vintageDesc')}</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default page
