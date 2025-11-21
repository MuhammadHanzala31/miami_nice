import Image from 'next/image'
import React from 'react'
import cardImage from '@/public/speaker-card.png'

export default function SpeakerCard() {
  return (
    <div className=' flex  lg:flex-row flex-col gap-5 items-center'>
      <Image src={cardImage} alt='sorry'/>
      <div className='flex flex-col gap'>
        <h5 className='text-white font-tilt-wrap text-[30px] font-normal'>MARIA SMITH</h5>
         <h6 className='text-[26px] font-inter font-normal text-white'>PHD...</h6>
         <p className='text-[18px] font-inter font-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
      </div>
    </div>
  )
}
