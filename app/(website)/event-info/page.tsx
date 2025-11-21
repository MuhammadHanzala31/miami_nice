import React from 'react'
import mainImg from '@/public/event-info.jpg'
import Image from 'next/image'

export default function page() {
    return (
        <main>
            <section className='event-info max-h-[327px] flex justify-center items-center w-full opacity-100'>
                <h2 className='text-white h-[327px] bg-[#00000065] flex justify-center items-center w-full font-tilt-wrap text-6xl text-shadow-[#002A46] text-shadow-2xs'>EVENT INFO</h2>
            </section>
            <div className='bg-[#F5F5F5] py-10'>
                <div className='w-[85%] mx-auto flex flex-col gap-10'>
                    <p className='font-tilt-wrap text-[17px] text-black'>Important Message: Your attendance will be recorded after each lecture is completed by using your phone to scan a QR code into the OE TRACKER APP. You must download the OE TRACKER app and create a username and password by FRIDAY.  OE TRACKER accounts cannot be created on the weekends. If you do not have an OE TRACKER username and password, after downloading the app, touch “Create User”  at the bottom of the Login screen to set one up or call ARBO at 704-970-2710 or 866-869-6852 and they can do it for you.  If you have forgotten your username and/or password, touch “Forgot Username or Password” at the bottom of the Login screen or call ARBO.</p>
                    <div className='flex flex-col gap-4'>
                        <p className='font-tilt-wrap text-[18px] text-black'>ATTENDANCE</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>Your attendance will be recorded after each lecture is completed by using your phone to scan a QR code. We will not provide credit slips/stamps at the end of each lecture. The ARBO reports will be used to upload attendance to CE Broker so it is important that you scan after each lecture. If you are not comfortable scanning, our staff will work with you to get your credits reported. </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-tilt-wrap text-[18px] text-black'>OE TRACKER</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>Download OE TRACKER from the App Store or Google Play.</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>Logging into the OE TRACKER app as a Course Attendee:</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>– Touch “Course Attendee”</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>You will need your OE TRACKER username and password to log into the OE TRACKER app. If you don’t have a username and password, touch “Create User” at the bottom of the Login screen to set one up or call ARBO at 704-970-2710 or 866-869-6852 and they can do it for you.  If you have forgotten your username and/or password, touch “Forgot Username or Password?” at the bottom of the Login screen or call ARBO and they will tell you what they are.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-tilt-wrap text-[18px] text-black'>– Enter your username and password and touch “Log In”</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>NOTE: These fields are case sensitive. Many phones will capitalize and self-correct what you type, so be sure you entered your username and password correctly.  </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-tilt-wrap text-[18px] text-black'>– When you have logged in, the Main screen will open. This screen will display your</p>
                        <p className='font-tilt-wrap text-[17px] text-black'> – First and last name at the top</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>– OE TRACKER Number</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>       – E-mail address</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-tilt-wrap text-[18px] text-black'>– Recording your Attendance at a CE Course:</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>On the Main screen, touch “Scan QR code” located below your e-mail address.</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>Your phone’s camera will open and you will see “Scan QR code” at the top of you screen.</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>Center the QR code provided by the provider of the CE Course on your screen and it will automatically scan. </p>
                        <p className='font-tilt-wrap text-[17px] text-black'>If you have scanned the QR code correctly, the confirmation screen will appear.</p>
                        <p className='font-tilt-wrap text-[17px] text-black'>You will also be sent an e-mail from OE TRACKER within the next few minutes. </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-tilt-wrap text-[18px] text-black'>REFUND POLICY:</p>
                        <p className='font-inter text-[17px] text-black'>MDOPA will only allow refunds up to 30 days before the event. This is due to the hotel requiring us to provide a final number of guests.  All refunds will be subject to a flat $50 Transaction fee.
                        </p>
                    </div>
                </div>

            </div>
            <div className='bg-[#F5F5F5] flex flex-col items-center gap-6 justify-center py-10'>
                <Image src={mainImg} alt='main' className='shadow-2xl'/>
                                <button className='bg-[#DD5C9C] px-10 py-3 max-w-[250px] w-full text-white font-tilt-wrap text-2xl rounded-3xl cursor-pointer hover:scale-[1.1] transition-all'>Register Now</button>

            </div>
        </main>
    )
}
