"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useCartContext } from '@/context/cartContext'

type ProductProps = {
    id : number,
    name : string,
    description : string,
    price : number,
    image : string,
}

export default function Product(props : ProductProps) {
    const [count, setCount] = useState(1)
    function Add(){
        setCount(prev => prev + 1)
    }
    function Sub(){
        if(count>1){
            setCount(prev=> prev - 1)
        }
    }
    const { addItem, showItems } = useCartContext()
  return (
    <div className='w-full h-[40vh] flex justify-center items-center mt-[10rem]'>
        <div className='w-[69%] h-full flex flex-row justify-between items-center'>
            <div className='bg-[rgba(241,241,241,255)] w-[49%] h-full flex justify-center items-center rounded-3xl'>
            <Image src={props.image} alt='tkt' height={700} width={700}/>
            </div>
            <div className='flex flex-col justify-start w-[40%]'>
                <h1 className='text-[5rem] font-semibold'>{props.name}</h1>
                <p className='text-[2rem] text-[rgb(151,151,152)] mt-[5rem]'>{props.description}</p>
                <p className='text-[2.5rem] font-semibold mt-[5rem]'>${props.price}</p>
                <div className='flex flex-row w-[50%] h-full justify-between mt-[5rem]'>
                    <div className='flex flex-row items-center w-[50%] h-[5rem] bg-[rgba(241,241,241,255)]'>
                        <button onClick={Sub} className='w-[33%] h-full flex items-center justify-center text-[2rem] bg-[rgba(241,241,241,255)] hover:bg-[rgb(151,151,152)] hover:text-[rgba(216,125,74,255)]'>-</button>
                        <p className='w-[33%] flex justify-center text-[2rem]'>{count}</p>
                        <button onClick={Add} className='w-[33%] h-full flex items-center justify-center text-[2rem] bg-[rgba(241,241,241,255)] hover:bg-[rgb(151,151,152)] hover:text-[rgba(216,125,74,255)]'>+</button>
                    </div>
                    <button onClick={()=>addItem(props.id, count)} className='h-[5rem] w-[15rem] text-[1.75rem] border-none text-[white] bg-[rgba(216,125,74,255)]'>ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>
  )
}
