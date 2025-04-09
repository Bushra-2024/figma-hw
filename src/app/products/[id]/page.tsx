'use client'

import Image from 'next/image'
import useProducts from '../data'
import { useTranslation } from 'react-i18next'

type Props = {
	params: {
		id: string
	}
}

export default function ProductPage({ params }: Props) {
  const { t } = useTranslation()
	const productId = +params.id
	const products = useProducts() // 
	const product = products.find(p => p.id === productId)

	if (!product)
		return (
			<p className='p-10 text-center text-red-500 text-lg'>
				Product not found.
			</p>
		)

	return (
		<div className='min-h-screen bg-white p-6 sm:p-12'>
			<div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-10'>
				<div className='rounded-xl overflow-hidden shadow-lg border border-gray-200'>
					<Image
						src={product.image}
						alt={product.title}
						width={600}
						height={700}
						className='w-full h-[600px] object-cover'
					/>
				</div>
				<div className='flex flex-col justify-center space-y-6'>
					<h1 className='text-3xl font-bold text-gray-800'>{product.title}</h1>
					<p className='text-2xl text-green-600 font-semibold'>
						{product.price}
					</p>
					<p className='text-gray-600'>{t('productDesc')}</p>

					<div className='flex items-center gap-4 pt-4'>
						<button className='bg-[#107E5F] hover:bg-[#0e6d51] text-white px-6 py-2 text-base'>
							{t('addToCart')}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
