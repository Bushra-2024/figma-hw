import Image from 'next/image'
import React from 'react'
import three from '../../../public/download5.jpeg'
import four from '../../../public/download7.jpeg'
import five from '../../../public/Afghannecklace.jpeg'
const page = () => {
	return (
		<div>
			<section className='text-center my-[5%]'>
				<h1 className='text-[43px] lg:text-start lg:ml-[190px] my-[50px]'>
					Our Categories
				</h1>
				<div className='flex lg:flex-row flex-col items-center gap-5 text-[22px] justify-center px-[5%]'>
					<div className='w-[75%] max-w-[300px]'>
						<Image
							src={three}
							alt='img'
							className='w-full h-[420px] object-cover shadow-[0_0_15px_rgb(15,15,15)]'
						/>
						<h3 className='mt-4 font-semibold'>ClassNameic Edge</h3>
						<p className='text-[18px]'>
							Reflects timeless styles with a modern edge
						</p>
					</div>

					<div className='w-[75%] max-w-[300px]'>
						<Image
							src={four}
							alt='img'
							className='w-full h-[420px] object-cover shadow-[0_0_15px_rgb(15,15,15)]'
						/>
						<h3 className='mt-4 font-semibold'>Ancestral Attire</h3>
						<p className='text-[18px]'>
							Reflects clothing inspired by heritage and tradition
						</p>
					</div>

					<div className='w-[75%] max-w-[300px]'>
						<Image
							src={five}
							alt='img'
							className='w-full h-[420px] object-cover shadow-[0_0_15px_rgb(15,15,15)]'
						/>
						<h3 className='mt-4 font-semibold'>Vintage Jewelery</h3>
						<p className='text-[18px]'>
							Merges festivity and ethnic style for celebratory attire
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default page
