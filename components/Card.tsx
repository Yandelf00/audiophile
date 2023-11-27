import React from 'react'
import Data from '@/data/products.json'
import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
    num : number;
    indice : number|null;
}
export default function Card(props:CardProps) {
    const daata = Data.products.find(product => product.id === props.indice)
    if (props.num %2 === 0){
        return (
            <div className='mt-[10rem] w-[69%] h-[60vh] flex flex-row justify-between items-center'>
                <div className='w-[49%] h-full bg-[rgba(241,241,241,255)] flex justify-center items-center rounded-2xl'>
                    <Image src={daata?.categoryImage?.desktop ?? ""} alt='tkt' height={700} width={700}/>
                </div>
                <div className='w-[49%] h-full flex flex-col justify-center items-center'>
                    <div className='w-[80%] h-full flex flex-col justify-center items-start'>
                        <h1 className='text-[5rem] font-semibold'>{daata?.name}</h1>
                        <p className='text-slate-400 text-[2rem] mt-[5rem]'>{daata?.description}</p>
                        <button className='border-none bg-[rgba(216,125,74,255)] h-[5rem] w-[20rem] text-white mt-[5rem] text-[2rem]'>
                            <Link href={`/${daata?.category}/${daata?.slug}`}>
                                SEE PRODUCT
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
          )
    }
    else{
        return (
            <div className='mt-[10rem] w-[69%] h-[60vh] flex flex-row justify-between items-center'>
                <div className='w-[49%] h-full flex flex-col justify-center items-center'>
                    <div className='w-[100%] h-full flex flex-col justify-center items-start'>
                        <h1 className='text-[5rem] font-semibold'>{daata?.name}</h1>
                        <p className='text-slate-400 text-[2rem] mt-[5rem]'>{daata?.description}</p>
                        <button className='border-none bg-[rgba(216,125,74,255)] h-[5rem] w-[20rem] text-white mt-[5rem] text-[2rem]'>
                        <Link href={`/${daata?.category}/${daata?.slug}`}>
                                SEE PRODUCT
                        </Link>
                        </button>
                    </div>
                </div>
                <div className='w-[49%] h-full bg-[rgba(241,241,241,255)] flex justify-center items-center rounded-2xl'>
                    <Image src={daata?.categoryImage?.desktop ?? ""} alt='tkt' height={700} width={700}/>
                </div>    
            </div>
          )

    }
  
}
