'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import products from './data'

const Products = () => {
  return (
    <div className="p-[2%] px-[5%]">
      <h1 className="font-[WindSong] font-semibold text-[40px] text-[#107E5F] pl-[5%]">Products</h1>

      <div className="flex flex-wrap gap-[20px] justify-center p-[5%]">
        {products.map((product) => (
          <div key={product.id} className="w-[95%] sm:w-[45%] md:w-[22%]">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <p>{product.title}</p>
              <pre>{product.price}</pre>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
