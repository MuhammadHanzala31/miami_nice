import React from 'react'
import Link from 'next/link'

export default function Banner() {
    return (
        <div className='home-hero flex items-center overflow-x-hidden'>
            <div className='flex lg:flex-row flex-col items-end gap-7  w-[85%] mx-auto'>
                <div className='lg:w-1/2'>
                    <h6 className='font-inter lg:text-[70px] text-3xl font-normal text-white'>30th Annual </h6>
                    <h1 className='font-tilt-wrap font-normal lg:text-[120px] text-6xl text-white'>EDUCATIONAL SYMPOSIUM</h1>
                    <div className='flex lg:flex-row flex-col justify-between lg:items-center items-start mt-3.5'>
                        <Link href={'/registeration'} className='bg-[#27D7DF] px-8 py-2 text-white font-tilt-wrap text-lg rounded-3xl cursor-pointer hover:scale-[1.1] transition-all'>Register Now</Link>
                        <span className='font-inter lg:text-[40px] italic font-normal text-white'>May 3rd-4th, 2025</span>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex flex-col items-center gap-1.5'>
                        <div className="bg-gradient-to-b from-[#2E999E] to-[#ededed77] h-[100px] w-[100px] opacity-95 flex justify-center items-center font-tilt-wrap text-white text-[70px] rounded-lg">10</div>
                        <span className='text-white font-inter text-[24px] italic'>Days</span>
                    </div>
                    <div className='flex flex-col items-center gap-1.5'>
                        <div className="bg-gradient-to-b from-[#2E999E] to-[#ededed77] h-[100px] w-[100px] opacity-95 flex justify-center items-center font-tilt-wrap text-white text-[70px] rounded-lg">10</div>
                        <span className='text-white font-inter text-[24px] italic'>Hours</span>
                    </div>
                    <div className='flex flex-col items-center gap-1.5'>
                        <div className="bg-gradient-to-b from-[#2E999E] to-[#ededed77] h-[100px] w-[100px] opacity-95 flex justify-center items-center font-tilt-wrap text-white text-[70px] rounded-lg">10</div>
                        <span className='text-white font-inter text-[24px] italic'>Minutes</span>
                    </div>
                    <div className='flex flex-col items-center gap-1.5'>
                        <div className="bg-gradient-to-b from-[#2E999E] to-[#ededed77] h-[100px] w-[100px] opacity-95 flex justify-center items-center font-tilt-wrap text-white text-[70px] rounded-lg">10</div>
                        <span className='text-white font-inter text-[24px] italic'>Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
