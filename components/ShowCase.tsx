import React from 'react'
import Data from '@/data/products.json'
import Image from 'next/image'
import { useCartContext } from '@/context/cartContext'

type ShowCaseProps = {
    id : number;
    counter : number;
}

export default function ShowCase(props : ShowCaseProps) {
    const dataa = Data.products.find(item => item.id === props.id)
    const {items, addItem, showItems} = useCartContext()
  return (
    <div className='flex flex-row justify-between w-full'>
        <div className='flex flex-row m-5'>
            <div>
                <Image className='rounded-2xl' src={dataa?.cartImage ?? ""} alt='tkt' height={100} width={100}/>
            </div>
            <div className='flex flex-col ml-5 justify-center'>
                <p className='text-[1.5rem] font-semibold mb-2'>{JSON.stringify(dataa?.shortName)}</p>
                <p className='text-[1.5rem] text-[gray]'>${JSON.stringify(dataa?.price)}</p>
            </div>
        </div>
        <div className='flex w-[20%] flex-row items-center mr-7'>
            <button onClick={showItems} className='w-[33%]  flex items-center justify-center text-[2rem] bg-[rgba(241,241,241,255)] hover:bg-[rgb(151,151,152)] hover:text-[rgba(216,125,74,255)]'>-</button>
            <p className='w-[33%] bg-[rgba(241,241,241,255)] flex justify-center text-[2rem]'> {JSON.stringify(props.counter)} </p>
            <button onClick={()=>addItem(props.id, props.counter)} className='w-[33%] flex items-center justify-center text-[2rem] bg-[rgba(241,241,241,255)] hover:bg-[rgb(151,151,152)] hover:text-[rgba(216,125,74,255)]'>+</button>
        </div>
    </div>
  )
}
