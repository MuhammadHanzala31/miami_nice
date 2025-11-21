import Image from 'next/image'
import React from 'react'
import whereImg from '@/public/where.png'

export default function Where() {
    return (
        <div className='flex flex-col shadow-2xl mb-4'>
            <Image src={whereImg} alt='sorry' />
            <div className='py-7 w-[85%] mx-auto grid lg:grid-cols-4 grid-cols-2'>
                <div className='relative'>
                    <h2 className='text-[60px] font-tilt-wrap font-regular relative z-10 text-[#274D94]'>Where?</h2>
                    <div className='bg-[#DD5C9C] w-[75px] h-[75px] rounded-full absolute top-1 z-0 -left-7'></div>
                </div>
                <div className='flex flex-col'>
                    <h6 className='text-[26px] font-tilt-wrap font-normal text-black'>BILTMORE HOTEL</h6>
                    <span className='text-[20px] font-tilt-wrap font-normal text-black'>1200 Anastasia Ave, Coral Gables, FL 33134, UNITED STATES</span>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='bg-[#BCBCBC] py-2  text-black font-tilt-wrap px-8 rounded-3xl shadow-2xl hover:scale-[1.1] transition-all cursor-pointer' >See Map</button>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='bg-[#27D7DF] py-2  text-white font-tilt-wrap px-8 rounded-3xl shadow-2xl hover:scale-[1.1] transition-all cursor-pointer' >Book Now</button>
                </div>
            </div>
        </div>
    )
}
