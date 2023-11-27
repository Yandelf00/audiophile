import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <div className='flex flex-row justify-start items-center bg-size'>
    <div className='flex flex-col justify-center items-start w-[60rem] bg-size ml-[30rem]'>
            <h4 className='text-[3rem] text-neutral-400'>NEW PPODUCT</h4>
            <h1 className='text-[10rem] text-slate-50 font-semibold'>XX99 MARK II HEADPHONES</h1>
            <p className='text-[4rem] text-neutral-400'>Experience natural, lifelike audio
                and exceptional build quality made for
                the passionate music enthusiast.
            </p>
            <button className='mt-[10rem] text-slate-50 text-[2rem] bg-[rgba(216,125,74,255)] h-[6rem] w-[20rem] '>See product</button>
        </div>
    </div>
  )
}
