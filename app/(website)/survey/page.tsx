import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <main>
            <section className='survey max-h-[327px] flex justify-center items-center w-full opacity-100'>
                <h2 className='text-white h-[327px] bg-[#00000065] flex justify-center items-center w-full font-tilt-wrap text-7xl text-shadow-[#002A46] text-shadow-2xs'>
                    survey
                </h2>
            </section>
            <div className='flex flex-col gap-6 items-center py-10'>
                <p className='text-3xl text-black font-light font-inter'> Please make sure to take the time to fill out the survey.</p>
                <p className='text-3xl text-black font-light font-inter'> The survey helps us for the following year. </p>
                <Link href={'https://forms.gle/9DSpFEW2e3dFM2SG6'} target='_blank' className='bg-[#DD5C9C] px-10 py-3 max-w-[250px] w-full text-white font-tilt-wrap text-2xl text-center rounded-4xl cursor-pointer hover:scale-[1.1] transition-all'>Survey</Link>

            </div>
        </main>
    )
}
