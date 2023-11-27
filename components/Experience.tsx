import React from 'react'

export default function Experience() {
  return (
    <div className='flex flex-row w-[70%] h-[90rem] mt-[20rem] justify-between'>
        <div className='w-[49%] h-full flex flex-col justify-center items-start'>
            <h1 className='text-black text-[4rem]'>BRINGING YOU THE <span className="text-[rgba(216,125,74,255)]">BEST</span> AUDIO GEAR</h1>
            <p className='text-gray-700 text-[2.5rem] mt-[5rem]'>Located at the heart of New York City, Audiophile is the premier store for 
                high end headphones, earphones, speakers, and audio accessories. We have a large
                showroom and luxury demonstration rooms available for you to browse and experience a 
                wide range of our products. Stop by our store to meet some of the fantastic people who 
                make Audiophile the best place to buy your portable audio equipment.
            </p>
        </div>
        <div className='w-[49%] h-full rounded-2xl bg-[url("/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg")]
        bg-no-repeat bg-cover bg-center'>
        </div>
    </div>
  )
}
