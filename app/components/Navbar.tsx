import Image from 'next/image'
import React from 'react'
import Logo from '@/public/logo.svg'
import Link from 'next/link'

export default function Navbar() {

    const nav = [
        {
            _id: 1,
            name: "Home",
            path: '/'
        },
        {
            _id: 2,
            name: "Prices",
            path: '/prices'
        },
        {
            _id: 3,
            name: "Event Info.",
            path: '/event-info'
        },
        {
            _id: 4,
            name: "Survey",
            path: '/survey'
        },
        {
            _id: 5,
            name: "Legal Notice",
            path: '/legal-notice'
        },
        {
            _id: 6,
            name: "Refunds",
            path: '/refunds'
        },
    ]


    return (
        <nav className='flex justify-between items-center pl-10 shadow-2xl'>
            <div className='py-5.5'>
                <Image src={Logo} alt='sorry' width={250} />
            </div>
            <div className='flex gap-8 items-center'>
                <div className='flex items-center gap-6 font-inter'>
                    {
                        nav.map((item) => (
                            <Link key={item._id} href={item.path} className='text-lg font-medium text-black hover:text-[#DD5C9C]'>{item.name}</Link>
                        ))
                    }
                </div>
                <Link href={'/registeration'} className='h-full bg-[#DD5C9C] px-10 py-7 text-white font-semibold text-lg cursor-pointer hover:opacity-90'>Registration</Link>
            </div>
        </nav>
    )
}
