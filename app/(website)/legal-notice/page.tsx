import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import legalImg from '@/public/legal-1.png'
import legalImg2 from '@/public/legal-2.png'
import legalImg3 from '@/public/legal-3.png'
import legalImg4 from '@/public/legal-4.png'
import legalImg5 from '@/public/legal-5.png'
import legalImg6 from '@/public/legal-6.png'
import legalImg7 from '@/public/legal-7.png'
import legalImg8 from '@/public/legal-8.png'

export default function page() {

    const legalCard = [
        {
            _id: 1,
            image: legalImg,
            path: 'https://www.dropbox.com/scl/fi/yxj3ry91puudrip6uiuku/Oral-Meds-in-Anterior-Segment-Disease-Jan-2023.pdf?rlkey=pzutqm2pnz1e22swxwxxloipb&dl=0'
        },
        {
            _id: 2,
            image: legalImg2,
            path: 'https://www.dropbox.com/scl/fo/l35686tce2i2wt0reaahw/h?rlkey=am9nxpagl6r91v842w9dl41fo&dl=0'
        },
        {
            _id: 3,
            image: legalImg3,
            path: 'https://www.dropbox.com/scl/fi/rc9eulk63jxqa5b7vjjxj/AdvancedScleralLensIndicationsFINAL.pdf?rlkey=72f3se2v4ouu9soy4pynveimm&dl=0'
        },
        {
            _id: 4,
            image: legalImg4,
            path: 'hhttps://www.dropbox.com/sh/vtxm7q1lzgvme3u/AABu3Eh8vy8JWj6kc5FNKTYDa?dl=0'
        },
        {
            _id: 5,
            image: legalImg5,
            path: 'https://www.dropbox.com/scl/fo/csxldkkmb5wnzw17ktq79/h?rlkey=8r808qffd9wcsnv6155ixw7oc&dl=0'
        },
        {
            _id: 6,
            image: legalImg6,
            path: 'https://www.dropbox.com/scl/fo/qk350lx43sdfabsu600oc/h?rlkey=0oudaaa8h1bxnuvr082mgrp5b&dl=0'
        },
        {
            _id: 7,
            image: legalImg7,
            path: 'https://www.dropbox.com/scl/fo/l9ywxr1eb9yyvzy1rck4t/h?rlkey=kilg8xtgdja3ds1b7rhz75ix6&dl=0'
        },
        {
            _id: 8,
            image: legalImg8,
            path: 'https://www.dropbox.com/sh/fyfpae6dvz500ll/AABuYpNVY5Qlh6XL8-eBeejva?dl=0'
        },
    ]


    return (
        <main className='py-10 flex flex-col gap-9 bg-[#F5F5F5]'>
            <h2 className='text-black text-center text-6xl font-sans'>Legal Notice</h2>
            <div className='w-[80%] grid lg:grid-cols-2 grid-cols-1 gap-4 mx-auto'>
                {
                    legalCard?.map(card => (
                        <Link key={card._id} href={card.path} target='_blank'>
                            <Image src={card.image} alt='legal1' />
                        </Link>
                    ))
                }
            </div>

        </main>
    )
}
