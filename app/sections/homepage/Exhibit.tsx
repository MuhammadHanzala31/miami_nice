import React from 'react'

export default function Exhibit() {
    return (
        <section className='exibit py-13 relative'>
            <div className='absolute h-[56px] w-[56px] bg-[#DD5C9C] rounded-full -top-8 justify-center flex mx-auto text-center left-[50%]'></div>
            <div className='flex flex-col gap-8  w-[80%] mx-auto justify-center items-center'>
                <h4 className='max-w-[651px] text-center text-white font-tilt-wrap lg:text-6xl font-normal'>Want to exhibit at MiamiNice 2025? </h4>
                <div className='flex lg:flex-row flex-col  gap-4 items-center'>
                    <span className='text-[#DD5C9C] text-[30px] font-tilt-wrap font-normal'>SHOWCASE YOUR BRAND </span>
                    <span className='text-[#DD5C9C] text-[30px] font-tilt-wrap font-normal'>| </span>
                    <span className='text-[#DD5C9C] text-[30px] font-tilt-wrap font-normal'>LAUNCH YOUR LATEST PRODUCTS  </span>
                    <span className='text-[#DD5C9C] text-[30px] font-tilt-wrap font-normal'>| </span>
                    <span className='text-[#DD5C9C] text-[30px] font-tilt-wrap font-normal'>WIN NEW BUSINESSES</span>
                </div>
                <button className='bg-[#27D7DF] px-8 py-2 text-white font-tilt-wrap text-2xl rounded-3xl cursor-pointer hover:scale-[1.1] transition-all'>EXHIBIT AT MIAMI NICE</button>

            </div>
        </section>
    )
}
