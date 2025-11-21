import Image from 'next/image'
import React from 'react'
import brand1 from '@/public/brand-1.png'
import brand2 from '@/public/brand-2.png'
import brand3 from '@/public/brand-3.png'
import brand4 from '@/public/brand-4.png'
import brand5 from '@/public/brand-5.png'

export default function Brands() {
  return (
    <div className='flex items-center justify-between w-[85%] mx-auto py-10'>
      <Image src={brand1} alt='brand1'/>
      <Image src={brand2} alt='brand2'/>
      <Image src={brand3} alt='brand3'/>
      <Image src={brand4} alt='brand4'/>
      <Image src={brand5} alt='brand5'/>
    </div>
  )
}
