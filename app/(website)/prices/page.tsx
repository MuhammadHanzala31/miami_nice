import FirstPriceTable from '@/app/components/FirstPriceTable'
import SecondPriceTable from '@/app/components/SecondPriceTable'
import ThirdPriceTable from '@/app/components/ThirdPriceTable'
import React from 'react'

export default function page() {
    return (
        <section className='bg-[#F5F5F5] py-10'>
            <div className='flex flex-col items-center w-[85%] mx-auto gap-7'>
                <div className='text-center max-w-2xl mx-auto flex flex-col gap-3'>
                    <h2 className='text-black text-4xl font-tilt-wrap'>PRICES</h2>
                    <h3 className='text-black text-4xl font-tilt-wrap'>EARLY BIRD PRICING DEADLINE JANUARY 31st
                        Regular Pricing Deadline March 31st
                        Late Pricing after March 31st</h3>
                </div>
                <FirstPriceTable />
                <SecondPriceTable/>
                <ThirdPriceTable/>
            </div>
        </section>
    )
}
