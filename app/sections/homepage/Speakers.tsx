import SpeakerCard from '@/app/components/SpeakerCard'
import React from 'react'

export default function Speakers() {
  return (
    <section className='flex flex-col'>
        <div className='w-full h-4 bg-[#DD5C9C]'></div>
       <div className='speaker py-10 w-full'>
        <div className='flex justify-center '>
            <div className='relative'>
                <h2 className='text-[60px] font-tilt-wrap font-regular relative z-10 text-white'>Speakers</h2>
                <div className='bg-[#DD5C9C] w-[75px] h-[75px] rounded-full absolute top-1 z-0 -left-7'></div>
            </div>
            
        </div>
        <div className='grid grid-cols-2 space-x-3 space-y-3 mt-6 w-[85%] mx-auto'>
            <SpeakerCard/>
            <SpeakerCard/>
            <SpeakerCard/>
            <SpeakerCard/>
            <SpeakerCard/>
            <SpeakerCard/>
        </div>
       </div>
    </section>
  )
}
