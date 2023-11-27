import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-[rgba(25,25,25,255)] w-full h-[9%] mt-[20rem] flex justify-center'>
        <div className='w-[60%] h-full flex flex-row justify-between '>
            <div className='flex flex-col justify-center items-start w-[40%]'>
                <h1 className='text-white font-bold text-[3rem] mb-[5rem] mt-3'>audiophile</h1>
                <p className='text-gray-400 text-[1.5rem] mb-[9rem]'>
                    audiophile is an all one stop to fulfill your audio needs. We're a small 
                    team of music lovers and sound specialists who are devoted to helping you get 
                    the most out of personal audio. Come and visit our demo facility-we're open
                    7 days a week.
                </p>
                <p className='text-gray-400 text-[1.5rem]'>Copyright 2021. All Rights Reserved</p>
            </div>
            <div className='w-[45%] h-full flex flex-col'>
                <div className='flex flex-row justify-between mt-[3rem]'>
                    <h2 className='text-white font-semibold text-[1.5rem]'>HOME</h2>
                    <h2 className='text-white font-semibold text-[1.5rem]'>HEADPHONES</h2>
                    <h2 className='text-white font-semibold text-[1.5rem]'>SPEAKERS</h2>
                    <h2 className='text-white font-semibold text-[1.5rem]'>EARPHONES</h2>
                </div>
                <div className='w-full h-[50%] mt-[5rem] flex flex-row justify-end items-end' >
                    <div>
                    <Image src="/images/fcb.png" alt='tkt' height={175} width={175}/>
                    </div>
                    <div className='h-[10rem] w-[10rem]'>
                    <Image src="/images/twit.png" alt='tkt' height={175} width={175}/>
                    </div>
                    <div>
                    <Image src="/images/insta.png" alt='tkt' height={175} width={175}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
