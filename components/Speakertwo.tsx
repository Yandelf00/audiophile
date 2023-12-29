import React from 'react'
import Link from 'next/link'

export default function Speakertwo() {
  return (
    <div className='flex w-full justify-center'>
        <div className='bg-[rgba(234,234,234,255)] w-[70%] h-[40rem] mt-[7rem] rounded-3xl 
        flex flex-row bg-[url("/images/home/desktop/image-speaker-zx7.jpg")] bg-no-repeat bg-cover'> 
            <div className='w-[40%] flex flex-col justify-center items-center'>
                <h1 className='text-black font-semibold text-[3rem] mb-[2rem]'>ZX7 SPEAKER</h1>
                <Link href={'speakers/zx7-speaker'}>
                  <button className='border border-black border-solid w-[18rem] h-[5rem] text-black text-[1.5rem]
                  mt-[2rem]'>SEE PRODUCT</button>
                </Link>
            </div>
            <div className=''>

            </div>
        </div>
    </div>
  )
}
