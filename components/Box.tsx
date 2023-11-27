"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type BoxProps = {
    image:string,
    title:string
}

export default function Box(props : BoxProps) {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -1000 }}
    animate="whileInView"
    variants={{
        whileInView: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } }
    }}
    className='h-[25rem] w-[50rem] bg-[rgba(241,241,241,255)] rounded-xl mt-[20rem] flex 
    flex-col items-center justify-end relative ml-[3rem] mr-[3rem] drop-shadow-md   '>
        <Image src={props.image} alt='tkt' height={400} width={400}
        className='absolute bottom-[10rem] drop-shadow-md'/>
        <motion.h1
        className='font-bold text-[2rem] mb-[1rem]'> {props.title} </motion.h1>
        <h3 className='text-[1.5rem] text-[rgba(128,128,128,255)] mb-[3rem]'>SHOP</h3>
        <div><p></p></div>
    </motion.div>
  )
}
