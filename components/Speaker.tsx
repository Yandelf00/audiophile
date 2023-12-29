"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
export default function Speaker() {
  return (
    <div className='w-full flex justify-center'>
        <motion.div
        initial={{ opacity: 0}}
        animate="whileInView"
        variants={{
            whileInView: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }
        }}
         className='w-[70%] h-[80rem] bg-[rgba(216,125,74,255)] mt-[20rem] rounded-3xl  
        bg-[url("/images/home/desktop/pattern-circles.svg")] bg-left bg-cover bg-no-repeat
        flex flex-row items-center justify-center'>
            <div className='h-full w-[50%] flex items-end justify-center'>
                <Image className='' src="/images/home/desktop/image-speaker-zx9.png" alt='tkt' height={800} width={800}/>
            </div>
            <div className='flex flex-col h-full w-[50%] justify-center items-center'>
                <div className='flex w-full justify-start items-start'>
                    <h1 className='text-white text-[10rem] font-bold'>ZX9 SPEAKER</h1>
                </div>
                <p className='text-[rgba(236,192,168,255)] text-[4rem] mt-[3rem]'>Upgrade to premium speakers that are phenomenally built
                    to deliver truly remarkable sound
                </p>
                <div className='flex w-full justify-start items-start mt-[5rem]'>
                    <Link href={'speakers/zx9-speaker'}>
                        <button className='bg-black text-white text-bold text-[2rem] h-[7rem] w-[22rem]'>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
