import Image from 'next/image'
import React from 'react'
import Logo from '@/public/logo.svg'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='bg-[#142B57] py-10'>
            <div className='grid lg:grid-cols-3 grid-cols-1 w-[85%] mx-auto'>
                <div className='flex flex-col gap-6'>
                    <Image src={Logo} alt='sorry' width={260} />
                    <p className='text-[17px] font-inter text-white font-normal'>
                        Miami Nice is run by the Optometric Physicians Association, whose mission is
                        to advance the profession of optometry through education, professional
                        development, service and public policy advocacy.
                    </p>
                </div>
                <div className='flex flex-col gap-6'>
                    <h6 className='text-[19px] font-tilt-wrap text-white font-normal'>Useful Links</h6>
                    <div className='flex flex-col gap-2'>
                        <Link href='/' className='text-[17px] font-inter text-white font-normal'>Schedule</Link>
                        <Link href='/' className='text-[17px] font-inter text-white font-normal'>Prices</Link>
                        <Link href='/' className='text-[17px] font-inter text-white font-normal'>Doctor Registration</Link>
                        <Link href='/' className='text-[17px] font-inter text-white font-normal'>Sponsor/Exhibitor Registration</Link>
                        <Link href='/' className='text-[17px] font-inter text-white font-normal'>Speaker Bio</Link>
                        <Link href='/' className='text-[17px] font-inter text-white font-normal'>FAQ</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <h6 className='text-[19px] font-tilt-wrap text-white font-normal'>Contact Us</h6>
                    <div className='flex flex-col gap-2'>
                        <input className='bg-[#D9D9D9] p-3.5 placeholder:text-[#767676] placeholder:text-[17px] placeholder:font-inter outline-0' placeholder='Name' />
                        <input className='bg-[#D9D9D9] p-3.5 placeholder:text-[#767676] placeholder:text-[17px] placeholder:font-inter outline-0' placeholder='Email' />
                        <input className='bg-[#D9D9D9] p-3.5 placeholder:text-[#767676] placeholder:text-[17px] placeholder:font-inter outline-0' placeholder='Phone' />
                        <textarea className='bg-[#D9D9D9] p-3.5 placeholder:text-[#767676] placeholder:text-[17px] placeholder:font-inter h-[100px] resize-none outline-0' placeholder='Message'></textarea>
                        <button className='bg-[#27D7DF] p-3.5 font-tilt-wrap text-[17px] text-[#142B57] text-center w-full cursor-pointer hover:opacity-90 transition-all'>SEND</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}