import ProgramCard from '@/app/components/ProgramCard'
import React from 'react'

export default function Programs() {
    return (
        <section className='program py-15 '>
            <div className='flex justify-center '>
                <div className='relative'>
                    <h2 className='text-[60px] font-tilt-wrap font-regular relative z-10 text-[#274D94]'>Programs</h2>
                    <div className='bg-[#DD5C9C] w-[75px] h-[75px] rounded-full absolute top-1 z-0 -left-7'></div>
                </div>
            </div>
            <div className='grid grid-cols-2 space-x-4 space-y-4 my-7 w-[85%] mx-auto'>
                <ProgramCard />
                <ProgramCard />
            </div>
            <div className='flex justify-center '>
                <button className='bg-[#DD5C9C] px-10 py-3 max-w-[250px] w-full text-white font-tilt-wrap text-2xl rounded-3xl cursor-pointer hover:scale-[1.1] transition-all'>Register Now</button>

            </div>
        </section>
    )
}
