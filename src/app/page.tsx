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
export default function Home() {
	const router = useRouter()

	return (
		<div className='max-w-[1400px] m-auto'>
			<section className='flex lg:flex-row flex-col text-center px-[8%] justify-between section1'>
				<Image src={one} alt='img' className='w-[350px]' />

				<div>
					<h1 className='text-[65px] lg:mb-[20%] font-[windsong] text-[#107E5F]'>
						Armaghan
					</h1>
					<p className='text-[17px] text-[#107E5F] p-2'>
						Shop with purpose; every Armaghan is a treasure waiting to enhance
						your unique style, beautifully blending traditional elegance with
						modern flair.
					</p>
					<button
						onClick={() => router.push('/products')}
						className='w-[150px] rounded-2xl border-[3px] border-[#107E5F] bg-[#107E5F] text-white text-[17px] py-[3%] px-[5%] lg:mt-[20%] ml-auto lg:mr-[55%] hover:bg-white hover:text-[#107E5F] cursor-pointer '
					>
						Explore Now
					</button>
				</div>

				<Image src={two} alt='img' className='w-[350px]' />
			</section>

			<section className='text-center my-[5%]'>
				<h1 className='text-[43px] my-[50px]'>
					Our
					<span className='font-windsong font-semibold italic text-[30px] text-[#107E5F]'>
						Top
					</span>
					Categories
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

			<section className='my-[5%]'>
				<h1 className='text-center text-[43px] my-[50px]'>
					Our
					<span className='font-[windsong] font-semibold italic text-[30px] text-[#107E5F]'>
						Top
					</span>
					Trending
				</h1>
				<div className='flex flex-col lg:flex-row justify-center px-[5%] gap-[8%]'>
					<div
						className='relative lg:w-[45%] text-white text-center text-[34px] flex flex-col items-center justify-end bg-no-repeat bg-contain lg:h-[800px] h-[700px]'
						style={{ backgroundImage: `url(${six.src})` }}
					>
						<h2 className='hidden lg:block my-[33%] lg:text-5xl font-extrabold'>
							Trending This Week
						</h2>
						<button
							onClick={() => router.push('/products')}
							className='hidden lg:flex absolute bottom-0 right-4 w-[200px] h-[50px] bg-[#107E5F] text-[#eef7f4] border-[3px] border-[#107E5F] text-[18px] hover:bg-[#eef7f4] hover:text-[#107E5F]'
						>
							Explore Now
						</button>
					</div>
					<div
						className='lg:w-[45%] relative lg:mt-[20%] h-[500px] bg-cover bg-no-repeat'
						style={{
							backgroundImage: `url(${seven.src})`,
						}}
					>
						<h3 className=' hidden lg:flex absolute -top-[40%] right-[10px] w-[95%] bg-[#cfc7c79f] text-[#107E5F] text-center text-[40px] font-light p-[10px]'>
							<p>40% off everything</p>
							Designer Party Wear Traditional Clothing
						</h3>
						<button
							onClick={() => router.push('/products')}
							className='w-[200px] h-[50px] bg-[#107E5F] text-[#eef7f4] border-[3px] border-[#107E5F] text-[18px] hover:bg-[#eef7f4] hover:text-[#107E5F] transition-colors '
						>
							Explore Now
						</button>
					</div>
				</div>
			</section>

			<section className=' px-[5%] py-[2%] text-[21px]'>
				<h1 className='text-center text-[43px] mb-[20px]'>
					Just in
					<span className='font-windsong font-semibold italic text-[30px] text-[#107E5F]'>
						New
					</span>
					Arrivals
				</h1>
				<p className=' text-[24px] italic text-[#107E5F] bg-[#a7a7a723] p-[2%]'>
					Winter’s coming, and we’re all about stylish, cozy clothes to keep you
					warm and looking great! <br />
					Check out our new collection
				</p>
				<div className=' flex  lg:flex-row flex-col justify-center items-center gap-[10px]'>
					<div className='flex flex-col items-center'>
						<Image src={eight} alt='' className='lg:w-[85%] mb-[10px]' />
						<p className='text-center'>
							Black Cross-Stitch Embroidered Chapan | Velvet Party Wear Cardigan
						</p>
						<pre className='text-[27px] p-[2%]'>
							$52.20 <del className='text-[#a19f9f] text-[19px]'>$58.00</del>
						</pre>
					</div>
					<div className=' flex flex-col items-center lg:pl-[40px]'>
						<Image
							src={nine}
							alt=''
							className='lg:w-[90%] lg:mt-[30%] mb-[10px]'
						/>
						<p className='text-center'>
							Multi Color Patch Blazer | Fancy Embroidered Blazer
						</p>
						<pre className='text-[27px] p-[2%]'>
							$123.30 <del className='text-[#a19f9f] text-[19px]'>$137.00</del>
						</pre>
					</div>
					<div className='flex flex-col items-center'>
						<Image
							src={ten}
							alt=''
							className='lg:w-[99%] lg:mt-[70%] mb-[10px]'
						/>
						<p className='text-center'>
							Marron Cherma Embroidered Flower Pattern Dress
						</p>
						<pre className='text-[27px] p-[2%]'>
							$269.10 <del className='text-[#a19f9f] text-[19px]'>$299.00</del>
						</pre>
					</div>
				</div>
			</section>

			<section className='section5 flex lg:flex-row flex-col gap-[20px] justify-center px-[5%]'>
				<div className='picandtext5 flex flex-col items-start'>
					<h1 className='text-[38px] mb-[5%]'>
						Shop the Best Traditional Wear Online for Women
					</h1>
					<p className='text-[19px] text-[#363333] leading-[25px] mb-[5%]'>
						With casual gatherings and festive occasions approaching, get ready
						to elevate your style with our handcrafted traditional Central Asian
						and South Asian ethnic wear! Each piece is a celebration of rich
						culture and artistry, designed to bring a unique flair to your
						wardrobe. From modern and traditional mix dresses to elegant
						chapans, our collection offers a variety of styles, colors, and
						intricate details that embody timeless tradition. Whether youre
						dressing up for a casual party or enjoying a relaxed celebration,
						these pieces promise to make you stand out while providing comfort
						and sophistication.
						<br />
						<br />
						Explore our exquisite selection and embrace the beauty of
						handcrafted elegance for every occasion!
					</p>
				</div>
				<Image
					src={eleven}
					alt=''
					className='w-[60%] rounded-[100px] object-cover'
				/>
			</section>

			<section className='section6 my-[7%] mx-10'>
				<h1 className='text-center text-[43px] my-[50px]'>
					Our{' '}
					<span className='font-[windsong] font-semibold italic text-[30px] text-[#107E5F]'>
						Top
					</span>
					Best Sellers
				</h1>
				<div className='flex lg:flex-row flex-col gap-[20px] justify-center'>
					<div className='seller1 lg:w-[23%]'>
						<Image
							src={tweleve}
							alt='img'
							className='w-full h-[400px] object-cover rounded-lg'
						/>
						<p className='text-center mt-[2%]'>
							Marron Cherma Embroidered Flower Pattern Dress
						</p>
						<pre className='text-center text-[20px]'>$269.10</pre>
					</div>
					<div className='seller1 lg:w-[23%]'>
						<Image
							src={five}
							alt='img'
							className='w-full h-[400px] object-cover rounded-lg'
						/>
						<p className='text-center mt-[2%]'>
							Traditional Afghani Bridal Jewelry Set | Tribal Choker Necklace,
							Headpiece, Earrings
						</p>
						<pre className='text-center text-[20px]'>$31.50</pre>
					</div>
					<div className='seller1 lg:w-[23%]'>
						<Image
							src={thirteen}
							alt='img'
							className='w-full h-[400px] object-cover rounded-lg'
						/>
						<p className='text-center mt-[2%]'>
							Purple 3 Piece Chermaduzi Embroidered Dress | White Charma
						</p>
						<pre className='text-center text-[20px]'>$107.10</pre>
					</div>
					<div className='seller1 lg:w-[23%]'>
						<Image
							src={bangle}
							alt='img'
							className='w-full h-[400px] object-cover rounded-lg'
						/>
						<p className='text-center mt-[2%]'>
							Bronze Cuff Bracelet | Golden Engraved Bracelet
						</p>
						<pre className='text-center text-[20px]'>$69.00</pre>
					</div>
				</div>
				<button
					onClick={() => router.push('/products')}
					className='w-[150px] h-[60px] bg-[#107E5F] text-[#eef7f4] border-[3px] border-[#107E5F] text-[18px] mt-[4%] mx-5 hover:bg-[#eef7f4] hover:text-[#107E5F] transition-colors'
				>
					Shop Now
				</button>
			</section>
		</div>
	)
}
