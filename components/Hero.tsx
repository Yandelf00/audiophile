import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
  return (
    <div className='flex flex-row justify-start items-center bg-size w-full'>
    <div className='flex flex-col justify-center items-start sm:items-start sm:w-[20rem] w-[60rem] bg-size sm:ml-[10rem] ml-[30rem]'>
            <h4 className='sm:text-[1rem] text-[3rem] text-neutral-400'>NEW PPODUCT</h4>
            <h1 className='sm:text-[1rem] text-[10rem] text-slate-50 font-semibold'>XX99 MARK II HEADPHONES</h1>
            <p className='sm:text-[1rem] text-[4rem] text-neutral-400'>Experience natural, lifelike audio
                and exceptional build quality made for
                the passionate music enthusiast.
            </p>
            <Link href={'/headphones/xx99-mark-two-headphones'}>
              <button className='sm:text-[1rem] mt-[10rem] text-slate-50 text-[2rem] bg-[rgba(216,125,74,255)] sm:h-[3rem] h-[6rem] sm:w-[10rem] w-[20rem] '>See product</button>
            </Link>
        </div>
    </div>
  )
}
