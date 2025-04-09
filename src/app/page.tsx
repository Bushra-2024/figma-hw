/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image'
import one from '../../public/download2.jpeg'
import two from '../../public/download3.jpeg'
import three from '../../public/download5.jpeg'
import four from '../../public/download7.jpeg'
import five from '../../public/Afghannecklace.jpeg'
import six from '../../public/download10.jpeg'
import seven from '../../public/dress.jpeg'
import eight from '../../public/download8.jpeg'
import nine from '../../public/download11.jpeg'
import ten from '../../public/download12.jpeg'
import eleven from '../../public/Modren.jpeg'
import tweleve from '../../public/download13.jpeg'
import thirteen from '../../public/afghangirl.jpeg'
import bangle from '../../public/bangle.jpeg'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function Home() {
	const router = useRouter()

	const progressCircle = useRef<SVGSVGElement | null>(null)
	const progressContent = useRef<HTMLElement | null>(null)

	const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
		if (progressCircle.current) {
			progressCircle.current.style.setProperty(
				'--progress',
				String(1 - progress)
			)
		}
		
		if (progressContent.current) {
			progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
		}
	}

	const { t } = useTranslation()
	return (
		<div className='max-w-[1400px] m-auto'>
			<section className='flex lg:flex-row flex-col text-center px-[8%] justify-between items-center'>
				<Image
					src={one || '/placeholder.svg'}
					alt='Hero Image 1'
					className='w-[350px]'
				/>

				<div>
					<h1 className='text-[65px] lg:mb-[20%] font-[windsong] text-[#107E5F]'>
						Armaghan
					</h1>
					<p className='text-[17px] text-[#107E5F] p-2'>{t('shopPurpose')}</p>
					<button
						onClick={() => router.push('/products')}
						className='w-[150px] rounded-2xl border-[3px] border-[#107E5F] bg-[#107E5F] text-white text-[17px] py-[3%] px-[5%] lg:mt-[20%] ml-auto lg:mr-[55%] hover:bg-white hover:text-[#107E5F] cursor-pointer'
					>
						{t('nav.explore')}
					</button>
				</div>

				<Image
					src={two || '/placeholder.svg'}
					alt='Hero Image 2'
					className='w-[350px]'
				/>
			</section>

			<section className='text-center my-[5%]'>
				<h1 className='text-[43px] my-[50px]'>
					{t('topCategories.heading').split(' ')[0]}{' '}
					<span className='font-[windsong] font-semibold italic text-[30px] text-[#107E5F]'>
						{t('topCategories.heading').split(' ')[1]}
					</span>{' '}
					{t('topCategories.heading').split(' ').slice(2).join(' ')}
				</h1>
				<div className='flex lg:flex-row flex-col items-center gap-5 text-[22px] justify-center px-[5%]'>
					<div className='w-[75%] max-w-[300px]'>
						<Image
							src={three}
							alt={t('topCategories.classicTitle')}
							className='w-full h-[420px] object-cover shadow-[0_0_15px_rgb(15,15,15)]'
						/>
						<h3 className='mt-4 font-semibold'>
							{t('topCategories.classicTitle')}
						</h3>
						<p className='text-[18px]'>{t('topCategories.classicDesc')}</p>
					</div>

					<div className='w-[75%] max-w-[300px]'>
						<Image
							src={four || '/placeholder.svg'}
							alt={t('topCategories.ancestralTitle')}
							className='w-full h-[420px] object-cover shadow-[0_0_15px_rgb(15,15,15)]'
						/>
						<h3 className='mt-4 font-semibold'>
							{t('topCategories.ancestralTitle')}
						</h3>
						<p className='text-[18px]'>{t('topCategories.ancestralDesc')}</p>
					</div>

					<div className='w-[75%] max-w-[300px]'>
						<Image
							src={five || '/placeholder.svg'}
							alt={t('topCategories.vintageTitle')}
							className='w-full h-[420px] object-cover shadow-[0_0_15px_rgb(15,15,15)]'
						/>
						<h3 className='mt-4 font-semibold'>
							{t('topCategories.vintageTitle')}
						</h3>
						<p className='text-[18px]'>{t('topCategories.vintageDesc')}</p>
					</div>
				</div>
			</section>

			<section className='my-[5%]'>
				<h1 className='text-center text-[43px] my-[50px]'>
					{t('trendingSection.heading').split(' ')[0]}{' '}
					<span className='font-[windsong] font-semibold italic text-[30px] text-[#107E5F]'>
						{t('trendingSection.heading').split(' ')[1]}
					</span>{' '}
					{t('trendingSection.heading').split(' ').slice(2).join(' ')}
				</h1>
				<h3 className='flex bg-[#cfc7c79f] text-[#107E5F] text-center text-[20px] w-[380px] p-3 rounded-lg font-light m-auto'>
					{t('trendingSection.promoMessage')}
				</h3>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					onAutoplayTimeLeft={onAutoplayTimeLeft}
					className='mySwiper'
				>
					<SwiperSlide>
						<Image
							src={six || '/placeholder.svg'}
							alt='Slide 1'
							className='w-full h-full object-cover'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={one || '/placeholder.svg'}
							alt='Slide 2'
							className='w-full h-full object-cover'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={two || '/placeholder.svg'}
							alt='Slide 3'
							className='w-full h-full object-cover'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={five || '/placeholder.svg'}
							alt='Slide 4'
							className='w-full h-full object-cover'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={seven || '/placeholder.svg'}
							alt='Slide 5'
							className='w-full h-full object-cover'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={ten || '/placeholder.svg'}
							alt='Slide 6'
							className='w-full h-full object-cover'
						/>
					</SwiperSlide>

					<div className='autoplay-progress' slot='container-end'>
						<svg viewBox='0 0 48 48' ref={progressCircle}>
							<circle cx='24' cy='24' r='20'></circle>
						</svg>
						<span ref={progressContent}></span>
					</div>
				</Swiper>
			</section>

				<section className='px-[5%] py-[2%] text-[21px]'>
				<h1 className='text-center text-[43px] mb-[20px]'>
        {t('newArrivalsSection.heading')} 
        <span className='font-[windsong] font-semibold italic text-[30px] text-[#107E5F]'>
          {t('newArrivalsSection.newArrivals')}
        </span>
      </h1>
		<p className='text-[24px] italic text-[#107E5F] bg-[#a7a7a723] p-[2%]'>
        {t('newArrivalsSection.description')}
      </p>
					<div className='flex lg:flex-row flex-col justify-center items-center gap-[10px]'>
						<div className='flex flex-col items-center'>
							<Image
								src={eight || '/placeholder.svg'}
								alt='Product 1'
								className='lg:w-[85%] mb-[10px]'
							/>
          <p className='text-center'>{t('newArrivalsSection.products.0.name')}</p>
			 <pre className='text-[27px] p-[2%]'>
            {t('newArrivalsSection.products.0.price')} <del className='text-[#a19f9f] text-[19px]'>{t('newArrivalsSection.products.0.oldPrice')}</del>
          </pre>

						</div>
						<div className='flex flex-col items-center lg:pl-[40px]'>
							<Image
								src={nine || '/placeholder.svg'}
								alt='Product 2'
								className='lg:w-[90%] lg:mt-[30%] mb-[10px]'
							/>
	          <p className='text-center'>{t('newArrivalsSection.products.1.name')}</p>
          <pre className='text-[27px] p-[2%]'>
            {t('newArrivalsSection.products.1.price')} <del className='text-[#a19f9f] text-[19px]'>{t('newArrivalsSection.products.1.oldPrice')}</del>
          </pre>

						</div>
						<div className='flex flex-col items-center'>
							<Image
								src={ten || '/placeholder.svg'}
								alt='Product 3'
								className='lg:w-[99%] lg:mt-[70%] mb-[10px]'
							/>
	         <p className='text-center'>{t('newArrivalsSection.products.2.name')}</p>
          <pre className='text-[27px] p-[2%]'>
            {t('newArrivalsSection.products.2.price')} <del className='text-[#a19f9f] text-[19px]'>{t('newArrivalsSection.products.2.oldPrice')}</del>
          </pre>
						</div>
					</div>
				</section>

	 <section className='section5 flex lg:flex-row flex-col gap-[20px] justify-center px-[5%]'>
      <div className='picandtext5 flex flex-col items-start'>
        <h1 className='text-[38px] mb-[5%]'>
          {t('traditionalWearSection.heading')}
        </h1>
        <p className='text-[19px] text-[#363333] leading-[25px] mb-[5%]'>
          {t('traditionalWearSection.description')}
        </p>
      </div>
      <Image
        src={eleven}
        alt={t('traditionalWearSection.imageAlt')}
        className='w-[60%] rounded-[100px] object-cover'
      />
    </section>

	 <section className='section6 my-[7%] mx-10'>
      <h1 className='text-center text-[43px] my-[50px]'>
        <span className='font-[windsong] font-semibold italic text-[30px] text-[#107E5F]'>
          {t('bestSellers.top')}
        </span>
        {t('bestSellers.title')}
      </h1>
      <div className='flex lg:flex-row flex-col gap-[20px] justify-center'>
        <div className='seller1 lg:w-[23%]'>
          <Image
            src={tweleve || '/placeholder.svg'}
            alt={t('bestSellers.product1.alt')}
            className='w-full h-[400px] object-cover rounded-lg'
          />
          <p className='text-center mt-[2%]'>{t('bestSellers.product1.name')}</p>
          <pre className='text-center text-[20px]'>{t('bestSellers.product1.price')}</pre>
        </div>
        <div className='seller1 lg:w-[23%]'>
          <Image
            src={five || '/placeholder.svg'}
            alt={t('bestSellers.product2.alt')}
            className='w-full h-[400px] object-cover rounded-lg'
          />
          <p className='text-center mt-[2%]'>{t('bestSellers.product2.name')}</p>
          <pre className='text-center text-[20px]'>{t('bestSellers.product2.price')}</pre>
        </div>
        <div className='seller1 lg:w-[23%]'>
          <Image
            src={thirteen || '/placeholder.svg'}
            alt={t('bestSellers.product3.alt')}
            className='w-full h-[400px] object-cover rounded-lg'
          />
          <p className='text-center mt-[2%]'>{t('bestSellers.product3.name')}</p>
          <pre className='text-center text-[20px]'>{t('bestSellers.product3.price')}</pre>
        </div>
        <div className='seller1 lg:w-[23%]'>
          <Image
            src={bangle || '/placeholder.svg'}
            alt={t('bestSellers.product4.alt')}
            className='w-full h-[400px] object-cover rounded-lg'
          />
          <p className='text-center mt-[2%]'>{t('bestSellers.product4.name')}</p>
          <pre className='text-center text-[20px]'>{t('bestSellers.product4.price')}</pre>
        </div>
      </div>
      <button
        onClick={() => router.push('/products')}
        className='w-[150px] h-[60px] bg-[#107E5F] text-[#eef7f4] border-[3px] border-[#107E5F] text-[18px] mt-[4%] mx-5 hover:bg-[#eef7f4] hover:text-[#107E5F] transition-colors'
      >
        {t('bestSellers.shopNow')}
      </button>
    </section>
		</div>
	)
}
