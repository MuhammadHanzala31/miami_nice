import Image from 'next/image'
import React from 'react'
import programCard from '@/public/program-card.png'

export default function ProgramCard() {
    return (
        <div className='bg-[#27D7DF] flex-col gap-2 rounded-4xl'>
            <Image src={programCard} alt='programcard' />
            <div className='py-3 px-11  flex flex-col gap-8'>
                <h4 className='text-[#DD5C9C] font-tilt-wrap font-normal text-[80px] leading-18'>saturday 05.03.2025</h4>
                <Discription time='7:00 - 8:00 ' discription='REGISTRATION, BREAKFAST & VISIT EXHIBIT HALL'/>
                <Discription time='8:00 - 9:40 ' discription='Oral Meds in Anterior Segment Disease (TQ) Dr. Steve Sorkin.'/>
                <Discription time='9:40 - 10:00 ' discription='BREAK - FOA LEGISLATIVE UPDATE'/>
                <Discription time='10:00 - 11:40 am ' discription='Punched in the Gut : Now I Can’t See (TQ) Dr. Vittorio Men'/>
                <Discription time='11:40 am - 1:00 pm ' discription='LUNCH & VISIT EXHIBIT HALL '/>
                <Discription time='1:00 - 2:40 pm ' discription='Scleral Lenses (TQ) Dr. Priscilla Sotomayor & Dr. Stacy Zubkousky'/>
                <Discription time='2:40 - 3:00 pm ' discription='BREAK & VISIT EXHIBIT HALL '/>
                <Discription time='3:00 - 4:40 pm' discription='FL Jurisprudence. Dr. David Rouse '/>
                <Discription time='4:00 - 5:30 pm' discription='Happy Hour Meet and Greet in Exhibit Hall'/>
                <div className=''>
                     <span className='block font-inter text-lg font-normal text-black'>TOTAL OF 8 COPE APPROVED HOURS</span>
                     <span className='block font-tilt-wrap text-lg font-normal text-black '>6 HR TQ, 2 HR FL JURISPRUDENCE</span>
                </div>

            </div>
        </div>
    )
}


const Discription = ({time, discription} : {time : string, discription : string}) => {
    return (
        <div className="flex w-full items-center  justify-between">
            <span className='font-tilt-wrap text-lg font-normal text-black w-[30%]'>{time}</span>
            <span className='font-inter text-lg font-normal text-black w-[70%]'>{discription}</span>
        </div>
    )
}
