import React from 'react'

export default function Earphones() {
  return (
    <div className='flex flex-row w-[70%] h-[45rem] mt-[7rem] justify-between'>
        <div className='w-[49%] h-full rounded-2xl bg-[url("/images/home/desktop/image-earphones-yx1.jpg")]
        bg-no-repeat bg-cover'></div>
        <div className='w-[49%] h-full rounded-2xl bg-[rgba(241,241,241,255)] flex flex-col justify-center items-start pl-[10rem]'>
                <h1 className='text-black font-semibold text-[4rem] mb-[2rem]'>ZX7 SPEAKER</h1>
                <button className='border border-black border-solid w-[18rem] h-[5rem] text-black text-[1.5rem]
                mt-[2rem]'>SEE PRODUCT</button>
        </div>
    </div>
  )
}
